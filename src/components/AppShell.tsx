import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onInfo: () => void
  onSettings: () => void
  onBack?: () => void
  onNext?: () => void
  nextLabel?: string
  backLabel?: string
  blue?: boolean
  hideBottom?: boolean
}

export default function AppShell({
  children,
  onInfo,
  onSettings,
  onBack,
  onNext,
  nextLabel = 'NEXT',
  backLabel = 'BACK',
  blue = false,
  hideBottom = false,
}: Props) {
  return (
    <div className={`shell ${blue ? 'shell-blue' : 'shell-black'}`}>
      <header className="topbar">
        <img className="corner-logo" src="/assets/upper-corner-logo.png" alt="Islands in the Net" />
        <div className="topbar-actions">
          <button type="button" onClick={onInfo} className="icon-button" aria-label="Exhibition information">
            <img src="/assets/info-icon.png" alt="" />
          </button>
          <button type="button" onClick={onSettings} className="icon-button" aria-label="Guide settings">
            <img src="/assets/settings-icon.png" alt="" />
          </button>
        </div>
      </header>
      <main className="shell-content">{children}</main>
      {!hideBottom && (
        <nav className="bottom-nav" aria-label="Guide navigation">
          <button type="button" className="nav-button nav-back" onClick={onBack} disabled={!onBack}>
            {backLabel}
          </button>
          <button type="button" className="nav-button nav-next" onClick={onNext} disabled={!onNext}>
            {nextLabel}
          </button>
        </nav>
      )}
    </div>
  )
}
