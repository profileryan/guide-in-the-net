import { readingRoomContent } from '../content/guideContent'

function MultilineTitle({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, index) => (
        <span key={`${line}-${index}`}>{line}</span>
      ))}
    </>
  )
}

export default function ReadingRoomPage() {
  return (
    <article className="reading-room-page screen-enter">
      <header className="reading-room-header">
        <p className="reading-room-kicker">FUTURES READING ROOM</p>
        <h1><MultilineTitle text={readingRoomContent.title} /></h1>
        <p className="reading-room-deck">{readingRoomContent.deck}</p>
      </header>

      <div className="reading-room-editorial">
        <section className="reading-room-copy" aria-label="About the reading room">
          {readingRoomContent.paragraphs.map((paragraph, index) => (
            <p key={paragraph} style={{ '--reveal-index': index } as React.CSSProperties}>{paragraph}</p>
          ))}
        </section>

        <section className="reading-room-pause" aria-labelledby="reading-room-pause-title">
          <p className="reading-room-pause-kicker" id="reading-room-pause-title">PAUSE &amp; REFLECT</p>
          <p className="reading-room-pause-lead">THE ARCHIVE IS UNFINISHED.<br />SO IS THE FUTURE.</p>
          <div className="reading-room-prompts">
            {readingRoomContent.prompts.map((prompt, index) => (
              <p key={prompt}><span>{String(index + 1).padStart(2, '0')}</span>{prompt}</p>
            ))}
          </div>
        </section>

        <footer className="reading-room-endmark" aria-hidden="true">
          <span>ARCHIVE</span><i /><span>OPEN</span>
        </footer>
      </div>
    </article>
  )
}
