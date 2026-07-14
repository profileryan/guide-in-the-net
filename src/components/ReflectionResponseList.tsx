import { useState, type ChangeEvent } from 'react'
import {
  readReflectionResponse,
  saveReflectionResponse,
  type ReflectionMetadata,
} from '../utils/reflections'
import '../reflectionFeatures.css'

export type ReflectionPromptItem = ReflectionMetadata

type Props = {
  items: ReflectionPromptItem[]
  className?: string
  maxLength?: number
  placeholder?: string
  actionLabel?: string
}

export default function ReflectionResponseList({
  items,
  className = '',
  maxLength = 280,
  placeholder = 'Write a short private response...',
  actionLabel = 'ANSWER',
}: Props) {
  const [openId, setOpenId] = useState<string | null>(null)
  const [responses, setResponses] = useState<Record<string, string>>(() => (
    Object.fromEntries(items.map((item) => [item.id, readReflectionResponse(item.id)]))
  ))

  const updateResponse = (item: ReflectionPromptItem, value: string) => {
    const next = value.slice(0, maxLength)
    setResponses((current) => ({ ...current, [item.id]: next }))
    saveReflectionResponse(item, next)
  }

  return (
    <div className={`reflection-response-list ${className}`.trim()}>
      {items.map((item, index) => {
        const response = responses[item.id] ?? ''
        const answered = response.trim().length > 0
        const open = openId === item.id

        return (
          <div
            className={`reflection-response-item ${open ? 'is-open' : ''} ${answered ? 'is-answered' : ''}`.trim()}
            key={item.id}
          >
            <button
              type="button"
              className="reflection-response-trigger"
              onClick={() => setOpenId((current) => current === item.id ? null : item.id)}
              aria-expanded={open}
              aria-controls={`${item.id}-response`}
            >
              <span className="reflection-response-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="reflection-response-question">{item.prompt}</span>
              <span className="reflection-response-action">{answered ? 'EDIT' : actionLabel}</span>
            </button>

            {!open && answered && (
              <p className="reflection-response-preview">{response}</p>
            )}

            {open && (
              <div className="reflection-response-editor" id={`${item.id}-response`}>
                <textarea
                  value={response}
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) => updateResponse(item, event.target.value)}
                  placeholder={placeholder}
                  rows={4}
                  maxLength={maxLength}
                  aria-label={`Your response to: ${item.prompt}`}
                  autoFocus
                />
                <div className="reflection-response-meta">
                  <span>PRIVATE · SAVED ON THIS DEVICE</span>
                  <span>{response.length}/{maxLength}</span>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
