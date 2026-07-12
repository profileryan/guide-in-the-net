import { useEffect, useMemo, useRef, useState } from 'react'
import AppShell from './components/AppShell'
import GlitchCanvas from './components/GlitchCanvas'
import IslandBlob from './components/IslandBlob'
import Modal from './components/Modal'

type Screen = 'loading' | 'cover' | 'name' | 'welcome' | 'how' | 'map' | 'section'
type Dialog = 'info' | 'settings' | null

const introParagraphs = [
  'From algorithms that shape reality for millions of people to AI that’s rapidly changing how we create and work, technology is no longer separate from our everyday lives. It is part of our language, labour, identity and culture.',
  'Yet, the dominant headlines about these changes are led disproportionately by commercial platforms, techno-solutionist narratives, or design and policy frameworks that assume this technology is neutral or inevitable.',
  'Islands in the Net exists to host a different kind of conversation.',
  'The exhibition takes its name from Bruce Sterling’s 1988 cyberpunk novel Islands in the Net, which imagined Singapore as an important node in a new global network of data and influence. Nearly four decades later, we return to that image from a Southeast Asian perspective.',
  'Here, “islands” are not isolated. They form an archipelago of distinct histories, communities and ways of knowing, connected through shifting flows of people, culture, capital and information.',
]

const guideActions = [
  {
    icon: '/assets/linger.png',
    text: 'Spend time sitting with new ideas and confronting the future they each paint. Try lingering longer than your first reaction.',
  },
  {
    icon: '/assets/form-thoughts.png',
    text: 'Form your own perspectives on technology, community, and what’s next for us and our cities.',
  },
  {
    icon: '/assets/converse.png',
    text: 'Join a conversation: whether in person or with notes for visitors who come before or after you.',
  },
  {
    icon: '/assets/reflect.png',
    text: 'Use this as a safe place to sit, listen, read, write, talk, journal, reflect and imagine.',
  },
  {
    icon: '/assets/return.png',
    text: 'Come back after dark for screenings, performances, talks and late-night takeovers.',
  },
  {
    icon: '/assets/share.png',
    text: 'Photograph, post, remix — or keep it offline. Feed the algorithm with #IslandsInTheNetSG.',
  },
]

function readStoredName() {
  try {
    return localStorage.getItem('iitn-guide-name') ?? ''
  } catch {
    return ''
  }
}

function readStoredMotion() {
  try {
    return localStorage.getItem('iitn-guide-reduced-motion') === 'true'
  } catch {
    return false
  }
}

const validScreens: Screen[] = ['loading', 'cover', 'name', 'welcome', 'how', 'map', 'section']

function initialScreen(): Screen {
  const candidate = new URLSearchParams(window.location.search).get('screen') as Screen | null
  return candidate && validScreens.includes(candidate) ? candidate : 'loading'
}

export default function App() {
  const [screen, setScreen] = useState<Screen>(initialScreen)
  const [dialog, setDialog] = useState<Dialog>(null)
  const [name, setName] = useState(readStoredName)
  const [draftName, setDraftName] = useState(readStoredName)
  const [reducedMotion, setReducedMotion] = useState(readStoredMotion)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.classList.toggle('reduced-motion', reducedMotion)
    try {
      localStorage.setItem('iitn-guide-reduced-motion', String(reducedMotion))
    } catch {
      // Storage may be unavailable in private browsing; the guide still works.
    }
  }, [reducedMotion])

  useEffect(() => {
    if (screen !== 'loading') return
    const delay = reducedMotion ? 700 : 2700
    const timer = window.setTimeout(() => setScreen('cover'), delay)
    return () => window.clearTimeout(timer)
  }, [screen, reducedMotion])

  useEffect(() => {
    const scroller = mainRef.current?.querySelector<HTMLElement>('.shell-content')
    scroller?.scrollTo({ top: 0, behavior: 'auto' })
  }, [screen])

  const displayName = useMemo(() => name.trim() || 'FRIEND', [name])

  const go = (next: Screen) => {
    setDialog(null)
    setScreen(next)
  }

  const saveName = () => {
    const clean = draftName.trim().slice(0, 32)
    if (!clean) return
    setName(clean)
    try {
      localStorage.setItem('iitn-guide-name', clean)
    } catch {
      // Non-blocking.
    }
    go('welcome')
  }

  const restart = () => {
    setDialog(null)
    setScreen('loading')
  }

  const updateNameFromSettings = (value: string) => {
    const clean = value.slice(0, 32)
    setName(clean)
    setDraftName(clean)
    try {
      localStorage.setItem('iitn-guide-name', clean)
    } catch {
      // Non-blocking.
    }
  }

  return (
    <div className={`app-stage stage-${screen}`} ref={mainRef}>
      <div className="phone-frame" key={screen}>
        {screen === 'loading' && <LoadingScreen reducedMotion={reducedMotion} />}

        {screen === 'cover' && (
          <CoverScreen reducedMotion={reducedMotion} onStart={() => go('name')} />
        )}

        {screen === 'name' && (
          <NameScreen
            value={draftName}
            onChange={setDraftName}
            onSubmit={saveName}
            onBack={() => go('cover')}
          />
        )}

        {screen === 'welcome' && (
          <AppShell
            onInfo={() => setDialog('info')}
            onSettings={() => setDialog('settings')}
            onBack={() => go('name')}
            onNext={() => go('how')}
          >
            <article className="welcome-screen screen-enter">
              <h1 className="welcome-heading">
                WELCOME, {displayName.toUpperCase()}.
                <span>TO A MEETING SPACE</span>
                <span>FOR THE FUTURE</span>
              </h1>
              <div className="intro-copy">
                {introParagraphs.map((paragraph, index) => (
                  <p key={paragraph} style={{ '--reveal-index': index } as React.CSSProperties}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </AppShell>
        )}

        {screen === 'how' && (
          <AppShell
            blue
            onInfo={() => setDialog('info')}
            onSettings={() => setDialog('settings')}
            onBack={() => go('welcome')}
            onNext={() => go('map')}
          >
            <article className="how-screen screen-enter">
              <h1>HOW TO USE THIS SPACE</h1>
              <div className="action-list">
                {guideActions.map((action, index) => (
                  <section
                    className="action-item"
                    key={action.text}
                    style={{ '--reveal-index': index } as React.CSSProperties}
                  >
                    <img src={action.icon} alt="" />
                    <p>{action.text}</p>
                  </section>
                ))}
              </div>
              <p className="closing-invitation">
                As you move through the space, linger. Sit with an idea. Follow a link. Speak to someone.
                Disagree. Leave something behind.
              </p>
            </article>
          </AppShell>
        )}

        {screen === 'map' && (
          <AppShell
            blue
            onInfo={() => setDialog('info')}
            onSettings={() => setDialog('settings')}
            onBack={() => go('how')}
            onNext={() => go('section')}
          >
            <article className="map-screen screen-enter">
              <h1>STEP INTO THE NET</h1>
              <div className="map-wrap">
                <img src="/assets/map-step-1.png" alt="Map of the exhibition showing the route into You and the Net" />
                <span className="map-pulse" aria-hidden="true" />
              </div>
              <p className="map-note">
                FOLLOW THE LIGHTS.<br />STAY IN EACH SECTION AS LONG AS YOU WOULD LIKE.
              </p>
            </article>
          </AppShell>
        )}

        {screen === 'section' && (
          <AppShell
            onInfo={() => setDialog('info')}
            onSettings={() => setDialog('settings')}
            onBack={() => go('map')}
            hideBottom
          >
            <SectionArrival reducedMotion={reducedMotion} onBack={() => go('map')} />
          </AppShell>
        )}
      </div>

      {dialog === 'info' && <InfoDialog onClose={() => setDialog(null)} />}
      {dialog === 'settings' && (
        <SettingsDialog
          name={name}
          reducedMotion={reducedMotion}
          onNameChange={updateNameFromSettings}
          onMotionChange={setReducedMotion}
          onRestart={restart}
          onClose={() => setDialog(null)}
        />
      )}
    </div>
  )
}

function LoadingScreen({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="loading-screen screen-enter" aria-live="polite">
      <div className="loading-lockup">
        <div className="loading-track" aria-hidden="true">
          <span className={reducedMotion ? 'instant' : ''} />
        </div>
        <p>LOADING<br />YOUR<br />GUIDE</p>
      </div>
    </section>
  )
}

function CoverScreen({ reducedMotion, onStart }: { reducedMotion: boolean; onStart: () => void }) {
  return (
    <section className="cover-screen screen-enter">
      <GlitchCanvas reducedMotion={reducedMotion} />
      <IslandBlob className="cover-blob blob-a" variant={1} />
      <IslandBlob className="cover-blob blob-b" variant={2} />
      <IslandBlob className="cover-blob blob-c" variant={3} />
      <IslandBlob className="cover-blob blob-d" variant={1} />
      <div className="cover-content">
        <img className="splash-logo" src="/assets/main-splash-logo.png" alt="Islands in the Net" />
        <p className="cover-tagline">A MEETING PLACE FOR SOUTHEAST ASIAN FUTURES:<br />EVERYDAY LIFE IN THE AGE OF AI, DATA &amp; MEMES</p>
        <button type="button" className="start-button" onClick={onStart}>START</button>
      </div>
    </section>
  )
}

function NameScreen({
  value,
  onChange,
  onSubmit,
  onBack,
}: {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  onBack: () => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => inputRef.current?.focus(), 500)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className="name-screen blue-grain screen-enter">
      <button type="button" className="quiet-back" onClick={onBack} aria-label="Back to cover">←</button>
      <form
        className="name-form"
        onSubmit={(event) => {
          event.preventDefault()
          onSubmit()
        }}
      >
        <label htmlFor="visitor-name">HOW SHOULD WE ADDRESS<br />YOU TODAY?</label>
        <div className="name-field-wrap">
          <input
            ref={inputRef}
            id="visitor-name"
            name="visitor-name"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="A name, real or imagined..."
            autoComplete="nickname"
            enterKeyHint="go"
            maxLength={32}
          />
          <button type="submit" className="name-submit" disabled={!value.trim()} aria-label="Continue">
            ↵
          </button>
        </div>
        <p className="name-hint">PRESS RETURN TO ENTER THE NET</p>
      </form>
    </section>
  )
}

function SectionArrival({ reducedMotion, onBack }: { reducedMotion: boolean; onBack: () => void }) {
  return (
    <section className="section-arrival screen-enter">
      <GlitchCanvas reducedMotion={reducedMotion} tone="pink" />
      <IslandBlob className="section-blob section-blob-a" variant={2} />
      <IslandBlob className="section-blob section-blob-b" variant={3} />
      <div className="section-arrival-content">
        <h1>YOU<br />&amp; THE<br />NET</h1>
        <p>TECHNOLOGY, IDENTITY AND<br />THE POSSIBLE SELF</p>
        <p className="slice-note">THE FIRST PRODUCTION SLICE ENDS HERE.</p>
        <button type="button" onClick={onBack} className="section-back">BACK TO MAP</button>
      </div>
    </section>
  )
}

function InfoDialog({ onClose }: { onClose: () => void }) {
  return (
    <Modal title="EXHIBITION INFO" onClose={onClose}>
      <div className="info-grid">
        <div><span>WHEN</span><strong>17 JUL — 16 NOV</strong></div>
        <div><span>WHERE</span><strong>PADIMAI ART &amp; TECH STUDIO<br />TANJONG PAGAR DISTRIPARK</strong></div>
        <div><span>HOURS</span><strong>11AM — 7PM</strong></div>
        <div><span>ADMISSION</span><strong>FREE</strong></div>
      </div>
      <p className="modal-body-copy">
        Islands in the Net is part exhibition, part public living room and part programme platform — a meeting place for Southeast Asian futures.
      </p>
    </Modal>
  )
}

function SettingsDialog({
  name,
  reducedMotion,
  onNameChange,
  onMotionChange,
  onRestart,
  onClose,
}: {
  name: string
  reducedMotion: boolean
  onNameChange: (value: string) => void
  onMotionChange: (value: boolean) => void
  onRestart: () => void
  onClose: () => void
}) {
  return (
    <Modal title="GUIDE SETTINGS" onClose={onClose}>
      <label className="settings-field">
        <span>YOUR NAME</span>
        <input value={name} onChange={(event) => onNameChange(event.target.value)} maxLength={32} />
      </label>
      <label className="settings-toggle">
        <span>REDUCE MOTION</span>
        <input
          type="checkbox"
          checked={reducedMotion}
          onChange={(event) => onMotionChange(event.target.checked)}
        />
        <i aria-hidden="true" />
      </label>
      <button type="button" className="restart-button" onClick={onRestart}>RESTART GUIDE</button>
    </Modal>
  )
}
