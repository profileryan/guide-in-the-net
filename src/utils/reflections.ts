export const REFLECTION_STORAGE_KEY = 'iitn-guide-reflections-v1'
export const LEGACY_CLOSING_STORAGE_KEY = 'iitn-guide-closing-reflections'

export type ReflectionEntry = {
  id: string
  section: string
  source: string
  prompt: string
  response: string
  order: number
  updatedAt: number
}

export type ReflectionMetadata = Omit<ReflectionEntry, 'response' | 'updatedAt'>

type ReflectionStore = Record<string, ReflectionEntry>

function readStore(): ReflectionStore {
  try {
    const stored = localStorage.getItem(REFLECTION_STORAGE_KEY)
    if (!stored) return {}

    const parsed: unknown = JSON.parse(stored)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}

    return Object.fromEntries(
      Object.entries(parsed).filter(([, value]) => {
        if (!value || typeof value !== 'object') return false
        const candidate = value as Partial<ReflectionEntry>
        return typeof candidate.id === 'string'
          && typeof candidate.section === 'string'
          && typeof candidate.source === 'string'
          && typeof candidate.prompt === 'string'
          && typeof candidate.response === 'string'
          && typeof candidate.order === 'number'
      }),
    ) as ReflectionStore
  } catch {
    return {}
  }
}

function writeStore(store: ReflectionStore) {
  try {
    localStorage.setItem(REFLECTION_STORAGE_KEY, JSON.stringify(store))
    window.dispatchEvent(new CustomEvent('iitn-reflections-changed'))
  } catch {
    // Private reflections remain usable even when local storage is unavailable.
  }
}

export function readReflectionResponse(id: string) {
  return readStore()[id]?.response ?? ''
}

export function saveReflectionResponse(metadata: ReflectionMetadata, response: string) {
  const clean = response.trimEnd()
  const store = readStore()

  if (!clean.trim()) {
    delete store[metadata.id]
    writeStore(store)
    return
  }

  store[metadata.id] = {
    ...metadata,
    response: clean,
    updatedAt: Date.now(),
  }
  writeStore(store)
}

export function readReflectionEntries() {
  return Object.values(readStore())
    .filter((entry) => entry.response.trim().length > 0)
    .sort((a, b) => a.order - b.order || a.updatedAt - b.updatedAt)
}

export function readLegacyClosingReflections(questionCount: number) {
  try {
    const stored = localStorage.getItem(LEGACY_CLOSING_STORAGE_KEY)
    if (!stored) return Array.from({ length: questionCount }, () => '')
    const parsed: unknown = JSON.parse(stored)
    if (!Array.isArray(parsed)) return Array.from({ length: questionCount }, () => '')
    return Array.from({ length: questionCount }, (_, index) => typeof parsed[index] === 'string' ? parsed[index] : '')
  } catch {
    return Array.from({ length: questionCount }, () => '')
  }
}
