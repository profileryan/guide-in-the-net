import { readingRoomContent } from '../content/guideContent'
import ReflectionResponseList, { type ReflectionPromptItem } from './ReflectionResponseList'

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

        <section className="reading-room-browse" aria-labelledby="reading-room-browse-title">
          <p className="reading-room-browse-kicker" id="reading-room-browse-title">BROWSE THE ARCHIVE</p>
          <ol className="reading-room-prompts">
            {readingRoomContent.browsingCues.map((cue, index) => (
              <li key={cue}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{cue}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="reading-room-pause" aria-labelledby="reading-room-pause-title">
          <p className="reading-room-pause-kicker" id="reading-room-pause-title">PAUSE &amp; REFLECT</p>
          <p className="reading-room-pause-lead">Choose a question. Leave a private note—or keep it with you.</p>
          <ReflectionResponseList
            items={readingRoomContent.reflectionQuestions.map((prompt, index): ReflectionPromptItem => ({
              id: `reading-room:${index}`,
              section: 'FUTURES READING ROOM',
              source: 'READING ROOM & RESEARCH ARCHIVE',
              prompt,
              order: 4000 + index,
            }))}
            actionLabel="RESPOND"
          />
          <p className="reflection-storage-note">OPTIONAL · STORED ON THIS DEVICE · NOT UPLOADED</p>
        </section>

        <footer className="reading-room-endmark" aria-hidden="true">
          <span>ARCHIVE</span><i /><span>OPEN</span>
        </footer>
      </div>
    </article>
  )
}
