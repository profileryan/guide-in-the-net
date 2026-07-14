import { commonsContent } from '../content/guideContent'
import ReflectionResponseList, { type ReflectionPromptItem } from './ReflectionResponseList'

function MultilineText({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, index) => (
        <span key={`${line}-${index}`}>{line}</span>
      ))}
    </>
  )
}

export default function CommonsPage() {
  const reflectionItems: ReflectionPromptItem[] = commonsContent.reflectionBullets.map((prompt, index) => ({
    id: `commons:${index}`,
    section: 'TOGETHER IN THE NET',
    source: 'THE COMMONS',
    prompt,
    order: 2000 + index,
  }))

  return (
    <article className="commons-page screen-enter">
      <header className="commons-hero">
        <div className="commons-hero-copy">
          <p className="commons-kicker">TOGETHER IN THE NET</p>
          <h1><MultilineText text={commonsContent.title} /></h1>
          <p className="commons-deck">{commonsContent.deck}</p>
        </div>
      </header>

      <div className="commons-editorial">
        <section className="commons-body">
          {commonsContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="reflection-block reflection-block-commons">
          <p className="reflection-kicker">PAUSE &amp; REFLECT</p>
          <p className="commons-reflection-lead">{commonsContent.reflectionLead}</p>
          <p className="reflection-response-invitation">Tap a prompt to record what it makes you notice.</p>
          <ReflectionResponseList items={reflectionItems} actionLabel="RESPOND" />
          <p className="reflection-storage-note">OPTIONAL · SAVED ONLY ON THIS DEVICE</p>
        </section>
      </div>
    </article>
  )
}
