type SectionDestination = 'cover' | 'section' | 'sectionTwoCover' | 'sectionThreeCover' | 'readingRoomCover'

type Props = {
  currentSection: 'beginning' | 'one' | 'two' | 'three' | 'four' | 'finale'
  onSelect: (destination: SectionDestination) => void
  onClose: () => void
}

const items: Array<{
  number: string
  label: string
  destination: SectionDestination
  section: Props['currentSection']
}> = [
  { number: '00', label: 'BEGINNING', destination: 'cover', section: 'beginning' },
  { number: '01', label: 'YOU AND THE NET', destination: 'section', section: 'one' },
  { number: '02', label: 'TOGETHER IN THE NET', destination: 'sectionTwoCover', section: 'two' },
  { number: '03', label: 'HERE IN THE NET', destination: 'sectionThreeCover', section: 'three' },
  { number: '04', label: 'FUTURES READING ROOM', destination: 'readingRoomCover', section: 'four' },
]

export default function SectionMenu({ currentSection, onSelect, onClose }: Props) {
  return (
    <div className="section-menu-backdrop" role="presentation" onMouseDown={onClose}>
      <aside
        className="section-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="section-menu-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="section-menu-head">
          <p id="section-menu-title">MOVE THROUGH THE NET</p>
          <button type="button" onClick={onClose} aria-label="Close section menu">×</button>
        </div>

        <nav aria-label="Guide sections">
          {items.map((item) => {
            const active = currentSection === item.section
            return (
              <button
                type="button"
                key={item.destination}
                className={active ? 'is-active' : ''}
                aria-current={active ? 'page' : undefined}
                onClick={() => onSelect(item.destination)}
              >
                <span>{item.number}</span>
                <strong>{item.label}</strong>
                <i aria-hidden="true">→</i>
              </button>
            )
          })}
        </nav>

        <p className="section-menu-note">MOVE FREELY. YOUR NAME AND PRIVATE NOTES STAY ON THIS DEVICE.</p>
      </aside>
    </div>
  )
}
