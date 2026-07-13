import { useEffect, useMemo, useRef, useState } from 'react'
import AppShell from './components/AppShell'
import ArtworkPage from './components/ArtworkPage'
import CommonsPage from './components/CommonsPage'
import ClosingReflectionPage from './components/ClosingReflectionPage'
import CreditsPage from './components/CreditsPage'
import GlitchCanvas from './components/GlitchCanvas'
import IslandBlob from './components/IslandBlob'
import Modal from './components/Modal'
import ReadingRoomPage from './components/ReadingRoomPage'
import {
  sectionOneArtworks,
  sectionOneIntro,
  sectionTwoArtworks,
  sectionTwoIntro,
  sectionThreeArtworks,
  sectionThreeIntro,
  type SectionIntroContent,
} from './content/guideContent'

type Screen =
  | 'loading'
  | 'cover'
  | 'name'
  | 'welcome'
  | 'how'
  | 'map'
  | 'section'
  | 'sectionIntro'
  | 'safeEntry'
  | 'history'
  | 'futureYou'
  | 'impactBench'
  | 'graceQuek'
  | 'sectionTwoCover'
  | 'sectionTwoIntro'
  | 'mapTwo'
  | 'altar'
  | 'traces'
  | 'commons'
  | 'sectionThreeCover'
  | 'sectionThreeIntro'
  | 'mapThree'
  | 'asiaMaxxing'
  | 'hexagram'
  | 'xo'
  | 'readingRoomCover'
  | 'readingRoom'
  | 'closing'
  | 'credits'
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
    iconHeight: '146px',
    text: 'Spend time sitting with new ideas and confronting the future they each paint. Try lingering longer than your first reaction.',
  },
  {
    icon: '/assets/form-thoughts.png',
    iconHeight: '70px',
    text: 'Form your own perspectives on technology, community, and what’s next for us and our cities.',
  },
  {
    icon: '/assets/converse.png',
    iconHeight: '70px',
    text: 'Join a conversation: whether in person or with notes for visitors who come before or after you.',
  },
  {
    icon: '/assets/reflect.png',
    iconHeight: '95px',
    text: 'Use this as a safe place to sit, listen, read, write, talk, journal, reflect and imagine.',
  },
  {
    icon: '/assets/return.png',
    iconHeight: '108px',
    text: 'Come back after dark for screenings, performances, talks and late-night takeovers.',
  },
  {
    icon: '/assets/share.png',
    iconHeight: '118px',
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

const validScreens: Screen[] = [
  'loading',
  'cover',
  'name',
  'welcome',
  'how',
  'map',
  'section',
  'sectionIntro',
  'safeEntry',
  'history',
  'futureYou',
  'impactBench',
  'graceQuek',
  'sectionTwoCover',
  'sectionTwoIntro',
  'mapTwo',
  'altar',
  'traces',
  'commons',
  'sectionThreeCover',
  'sectionThreeIntro',
  'mapThree',
  'asiaMaxxing',
  'hexagram',
  'xo',
  'readingRoomCover',
  'readingRoom',
  'closing',
  'credits',
]

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

  useEffect(() => {
    const url = new URL(window.location.href)
    if (screen === 'loading') url.searchParams.delete('screen')
    else url.searchParams.set('screen', screen)
    window.history.replaceState(null, '', url)
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
                    <div className="action-icon" style={{ '--icon-height': action.iconHeight } as React.CSSProperties}>
                      <img src={action.icon} alt="" />
                    </div>
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
            <MapScreen marker="one" image="/assets/map-step-1.png" alt="Map of the exhibition showing the route into You and the Net" note={['FOLLOW THE LIGHTS.', 'STAY IN EACH SECTION AS LONG AS YOU WOULD LIKE.']} />
          </AppShell>
        )}

        {screen === 'section' && (
          <AppShell
            immersive
            onInfo={() => setDialog('info')}
            onSettings={() => setDialog('settings')}
            onBack={() => go('map')}
            onNext={() => go('sectionIntro')}
          >
            <SectionArrival reducedMotion={reducedMotion} number="SECTION 1" title={'YOU AND\nTHE NET'} subtitle={'TECHNOLOGY, IDENTITY AND\nTHE POSSIBLE SELF'} tone="pink" variant="one" align="center" />
          </AppShell>
        )}

        {screen === 'sectionIntro' && (
          <AppShell
            blue
            onInfo={() => setDialog('info')}
            onSettings={() => setDialog('settings')}
            onBack={() => go('section')}
            onNext={() => go('safeEntry')}
          >
            <SectionIntroScreen content={sectionOneIntro} titleOverride={`${displayName.toUpperCase()} AND\nTHE NET`} />
          </AppShell>
        )}

        {screen === 'safeEntry' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('sectionIntro')} onNext={() => go('history')}>
            <ArtworkPage artwork={sectionOneArtworks['safe-entry']} />
          </AppShell>
        )}

        {screen === 'history' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('safeEntry')} onNext={() => go('futureYou')}>
            <ArtworkPage artwork={sectionOneArtworks.history} />
          </AppShell>
        )}

        {screen === 'futureYou' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('history')} onNext={() => go('impactBench')}>
            <ArtworkPage artwork={sectionOneArtworks['future-you']} />
          </AppShell>
        )}

        {screen === 'impactBench' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('futureYou')} onNext={() => go('graceQuek')}>
            <ArtworkPage artwork={sectionOneArtworks.impactbench} />
          </AppShell>
        )}

        {screen === 'graceQuek' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('impactBench')} onNext={() => go('sectionTwoCover')}>
            <ArtworkPage artwork={sectionOneArtworks['grace-quek']} />
          </AppShell>
        )}

        {screen === 'sectionTwoCover' && (
          <AppShell immersive onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('graceQuek')} onNext={() => go('sectionTwoIntro')}>
            <SectionArrival reducedMotion={reducedMotion} number="SECTION 2" title={'TOGETHER\nIN THE\nNET'} subtitle={'COMMUNITY, MEMORY AND\nCOLLECTIVE WORLDBUILDING'} tone="blue" variant="two" align="center" />
          </AppShell>
        )}

        {screen === 'sectionTwoIntro' && (
          <AppShell blue onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('sectionTwoCover')} onNext={() => go('mapTwo')}>
            <SectionIntroScreen content={sectionTwoIntro} />
          </AppShell>
        )}

        {screen === 'mapTwo' && (
          <AppShell blue onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('sectionTwoIntro')} onNext={() => go('altar')}>
            <MapScreen marker="two" image="/assets/map-step-2.png" alt="Map of the exhibition showing the route into Together in the Net" note={['FOLLOW THE CURVE INTO SECTION 2.', 'THIS PART OF THE EXHIBITION INVITES YOU TO LINGER TOGETHER.']} />
          </AppShell>
        )}

        {screen === 'altar' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('mapTwo')} onNext={() => go('traces')}>
            <ArtworkPage artwork={sectionTwoArtworks.altar} />
          </AppShell>
        )}

        {screen === 'traces' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('altar')} onNext={() => go('commons')}>
            <ArtworkPage artwork={sectionTwoArtworks.traces} />
          </AppShell>
        )}

        {screen === 'commons' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('traces')} onNext={() => go('sectionThreeCover')}>
            <CommonsPage />
          </AppShell>
        )}

        {screen === 'sectionThreeCover' && (
          <AppShell immersive tone="green" onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('commons')} onNext={() => go('sectionThreeIntro')}>
            <SectionArrival reducedMotion={reducedMotion} number="SECTION 3" title={'HERE IN\nTHE NET'} subtitle={'SOUTHEAST ASIA AND ITS\nTECHNOLOGICAL FUTURES'} tone="green" variant="three" align="center" />
          </AppShell>
        )}

        {screen === 'sectionThreeIntro' && (
          <AppShell tone="red" onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('sectionThreeCover')} onNext={() => go('mapThree')}>
            <SectionIntroScreen content={sectionThreeIntro} variant="here" />
          </AppShell>
        )}

        {screen === 'mapThree' && (
          <AppShell tone="green" onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('sectionThreeIntro')} onNext={() => go('asiaMaxxing')}>
            <MapScreen marker="three" image="/assets/map-step-3.png" alt="Map of the exhibition showing the route into Here in the Net" note={['FOLLOW THE DOTTED PATH INTO SECTION 3.', 'THE FUTURE LOOKS DIFFERENT WHEN IT IS IMAGINED FROM HERE.']} />
          </AppShell>
        )}

        {screen === 'asiaMaxxing' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('mapThree')} onNext={() => go('hexagram')}>
            <ArtworkPage artwork={sectionThreeArtworks['asia-maxxing']} />
          </AppShell>
        )}

        {screen === 'hexagram' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('asiaMaxxing')} onNext={() => go('xo')}>
            <ArtworkPage artwork={sectionThreeArtworks.hexagram} />
          </AppShell>
        )}

        {screen === 'xo' && (
          <AppShell onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('hexagram')} onNext={() => go('readingRoomCover')}>
            <ArtworkPage artwork={sectionThreeArtworks.xo} />
          </AppShell>
        )}

        {screen === 'readingRoomCover' && (
          <AppShell immersive onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('xo')} onNext={() => go('readingRoom')}>
            <ReadingRoomArrival reducedMotion={reducedMotion} />
          </AppShell>
        )}

        {screen === 'readingRoom' && (
          <AppShell tone="yellow" onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('readingRoomCover')} onNext={() => go('closing')}>
            <ReadingRoomPage />
          </AppShell>
        )}

        {screen === 'closing' && (
          <AppShell tone="yellow" onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('readingRoom')} onNext={() => go('credits')} nextLabel="FINISH">
            <ClosingReflectionPage visitorName={displayName} />
          </AppShell>
        )}

        {screen === 'credits' && (
          <AppShell immersive onInfo={() => setDialog('info')} onSettings={() => setDialog('settings')} onBack={() => go('closing')} hideNext>
            <CreditsPage visitorName={displayName} onRestart={restart} />
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

function MapScreen({ image, alt, note, marker }: { image: string; alt: string; note: string[]; marker: 'one' | 'two' | 'three' }) {
  return (
    <article className={`map-screen map-step-${marker} screen-enter`}>
      <h1>STEP INTO THE NET</h1>
      <div className="map-wrap">
        <img src={image} alt={alt} />
        <span className="map-pulse" aria-hidden="true" />
      </div>
      <p className="map-note">{note.map((line) => <span key={line}>{line}</span>)}</p>
    </article>
  )
}

function SectionArrival({
  reducedMotion,
  number,
  title,
  subtitle,
  tone,
  variant,
  align,
}: {
  reducedMotion: boolean
  number: string
  title: string
  subtitle: string
  tone: 'pink' | 'blue' | 'green'
  variant: 'one' | 'two' | 'three'
  align: 'left' | 'center'
}) {
  return (
    <section className={`section-arrival section-arrival-${variant} section-align-${align} screen-enter`}>
      <GlitchCanvas reducedMotion={reducedMotion} tone={tone} />
      <IslandBlob className="section-blob section-blob-a" variant={tone === 'blue' ? 1 : tone === 'green' ? 3 : 2} />
      <IslandBlob className="section-blob section-blob-b" variant={tone === 'green' ? 1 : 3} />
      <IslandBlob className="section-blob section-blob-c" variant={tone === 'blue' ? 2 : 1} />
      <div className="section-arrival-content">
        <p className="section-number">{number}</p>
        <h1>{title.split('\n').map((line) => <span key={line}>{line}</span>)}</h1>
        <p className="section-subtitle">{subtitle.split('\n').map((line) => <span key={line}>{line}</span>)}</p>
      </div>
    </section>
  )
}

function ReadingRoomArrival({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="reading-room-arrival screen-enter">
      <GlitchCanvas reducedMotion={reducedMotion} tone="yellow" />
      <IslandBlob className="reading-room-blob reading-room-blob-a" variant={3} />
      <IslandBlob className="reading-room-blob reading-room-blob-b" variant={1} />
      <div className="reading-room-arrival-copy">
        <p>FINAL SPACE</p>
        <h1><span>FUTURES</span><span>READING</span><span>ROOM</span></h1>
        <div className="reading-room-arrival-rule" aria-hidden="true" />
        <p className="reading-room-arrival-subtitle">RESEARCH ARCHIVE OF<br />SOUTHEAST ASIAN FUTURES</p>
      </div>
    </section>
  )
}

function SectionIntroScreen({ content, variant = 'default', titleOverride }: { content: SectionIntroContent; variant?: 'default' | 'here'; titleOverride?: string }) {
  return (
    <article className={`section-intro section-intro-${variant} ${titleOverride ? 'section-intro-personalized' : ''} screen-enter`}>
      <p className="section-intro-number">{content.number}</p>
      <h1>
        {(titleOverride ?? content.title).split('\n').map((line) => <span key={line}>{line}</span>)}
      </h1>
      {content.lead && <p className="section-intro-lead">{content.lead}</p>}
      <div className="section-intro-copy">
        {content.paragraphs.map((paragraph, index) => (
          <p key={paragraph} style={{ '--reveal-index': index } as React.CSSProperties}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

function SectionComplete({ title, kicker, body }: { title: string; kicker: string; body: string }) {
  return (
    <article className="slice-complete screen-enter">
      <p className="slice-complete-kicker">{kicker}</p>
      <h1>{title.split('\n').map((line) => <span key={line}>{line}</span>)}</h1>
      <p>{body}</p>
      <small>NEXT SECTION COMING SOON</small>
    </article>
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
