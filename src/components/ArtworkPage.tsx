import type { CSSProperties } from 'react'
import type { ArtworkContent } from '../content/guideContent'

type Props = {
  artwork: ArtworkContent
}

function MultilineText({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, index) => (
        <span key={`${line}-${index}`}>{line}</span>
      ))}
    </>
  )
}

export default function ArtworkPage({ artwork }: Props) {
  const style = {
    '--title-align': artwork.titleAlign ?? 'left',
    '--artwork-title-size': artwork.titleSize ?? '42px',
    '--artwork-image-position': artwork.image?.position ?? 'center',
    '--artwork-image-aspect': artwork.image?.aspect ?? '1.58 / 1',
  } as CSSProperties

  const [lead, ...body] = artwork.description

  return (
    <article
      className={`artwork-page artwork-${artwork.id} palette-${artwork.palette} screen-enter`}
      style={style}
    >
      <section className="artwork-hero" aria-labelledby={`${artwork.id}-title`}>
        {artwork.image ? (
          <figure className="artwork-hero-figure">
            <img src={artwork.image.src} alt={artwork.image.alt} />
          </figure>
        ) : (
          <div className="artwork-hero-placeholder" aria-hidden="true">
            <div className="artwork-hero-placeholder-disc" />
            <div className="artwork-hero-placeholder-grid" />
            <p>PARTICIPATORY INSTALLATION</p>
          </div>
        )}
        <div className="artwork-hero-no" aria-hidden="true">{artwork.sequence}</div>
        <div className="artwork-hero-scrim" aria-hidden="true" />
        <div className="artwork-hero-copy">
          <p className="artwork-section-label">{artwork.sectionLabel} <span>{artwork.sequence} / {artwork.total}</span></p>
          <header className="artwork-heading">
            <h1 id={`${artwork.id}-title`}><MultilineText text={artwork.title} /></h1>
            <p className="artwork-artist"><MultilineText text={artwork.artist} /></p>
          </header>
          {artwork.image?.note && <p className="artwork-image-note">{artwork.image.note}</p>}
          <p className="artwork-scroll-cue" aria-hidden="true">SCROLL TO READ <span>↓</span></p>
        </div>
      </section>

      <div className="artwork-editorial">
        <section className="artwork-opening">
          <p className="artwork-deck">{lead}</p>
          <div className="artwork-body">
            {body.map((paragraph, index) => (
              <p key={paragraph} style={{ '--reveal-index': index } as CSSProperties}>{paragraph}</p>
            ))}
          </div>
        </section>

        <blockquote className="artwork-pullquote">
          <span aria-hidden="true">“</span>
          <p>{artwork.pullQuote}</p>
        </blockquote>

        <section className="artwork-context">
          <div className="artwork-context-head">
            <p>WHY NOW?</p>
            <span aria-hidden="true">{artwork.sequence}</span>
          </div>
          <div className="artwork-context-copy">
            {artwork.whyNow.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="reflection-block">
          <p className="reflection-kicker">PAUSE / REFLECT</p>
          <div className="reflection-prompts">
            {artwork.reflection.map((prompt, index) => (
              <p key={prompt}><span>{String(index + 1).padStart(2, '0')}</span>{prompt}</p>
            ))}
          </div>
        </section>

        <footer className="artwork-endmark" aria-hidden="true">
          <span>{artwork.sequence}</span>
          <i />
          <span>{artwork.total}</span>
        </footer>
      </div>
    </article>
  )
}
