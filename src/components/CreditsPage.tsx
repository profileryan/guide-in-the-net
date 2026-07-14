type Props = {
  visitorName: string
  onRestart: () => void
}

export default function CreditsPage({ visitorName, onRestart }: Props) {
  return (
    <article className="credits-page screen-enter">
      <div className="credits-glitch" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>
      <div className="credits-message">
        <p>Thank you for exploring the net with us, {visitorName}.</p>
      </div>

      <div className="credits-copy">
        <section>
          <p>PRESENTED BY</p>
          <span>Padimai Art &amp; Tech Studio<br />Tanjong Pagar Distripark, Singapore</span>
        </section>
        <section>
          <p>CURATED, PROGRAMMED AND DESIGNED BY</p>
          <span>Kathleen Ditzig, Ryan Ho, Joshua Comaroff</span>
        </section>
      </div>

      <button type="button" className="credits-restart" onClick={onRestart}>START AGAIN</button>
    </article>
  )
}
