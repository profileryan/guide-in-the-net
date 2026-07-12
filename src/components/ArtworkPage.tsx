import type { CSSProperties } from 'react'
import type { ArtworkContent } from '../content/guideContent'

type Props = {
  artwork: ArtworkContent
}
function MultilineTitle({ text }: { text: string }) {
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
  } as CSSProperties

  return (
    <article className={`artwork-page artwork-${artwork.id} screen-enter`} style={style}>
      <header className="artwork-heading">
        <h1><MultilineTitle text={artwork.title} /></h1>
        <p className="artwork-artist">{artwork.artist}</p>
      </header>

      {artwork.image && (
        <figure className="artwork-figure">
          <img src={artwork.image.src} alt={artwork.image.alt} />
        </figure>
      )}

      <div className="artwork-body">
        {artwork.description.map((paragraph, index) => (
          <p key={paragraph} style={{ '--reveal-index': index } as CSSProperties}>{paragraph}</p>
        ))}
      </div>

      <section className="artwork-context">
        <h2>WHY NOW?</h2>
        {artwork.whyNow.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="reflection-block">
        <p className="reflection-kicker">PAUSE / REFLECT</p>
        {artwork.reflection.map((prompt) => <p key={prompt}>{prompt}</p>)}
      </section>
    </article>
  )
}
