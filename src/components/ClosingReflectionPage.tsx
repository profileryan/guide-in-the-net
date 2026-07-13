import { useEffect, useState } from 'react'
import { closingContent } from '../content/guideContent'

type Props = {
  visitorName: string
}

const STORAGE_KEY = 'iitn-guide-closing-reflections'

function readStoredReflections() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (!value) return ['', '', '']
    const parsed = JSON.parse(value)
    if (!Array.isArray(parsed)) return ['', '', '']
    return closingContent.questions.map((_, index) => typeof parsed[index] === 'string' ? parsed[index] : '')
  } catch {
    return ['', '', '']
  }
}

export default function ClosingReflectionPage({ visitorName }: Props) {
  const [answers, setAnswers] = useState<string[]>(readStoredReflections)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
    } catch {
      // The reflection remains usable when device storage is unavailable.
    }
  }, [answers])

  const updateAnswer = (index: number, value: string) => {
    setAnswers((current) => current.map((answer, answerIndex) => answerIndex === index ? value.slice(0, 600) : answer))
  }

  return (
    <article className="closing-page screen-enter">
      <header className="closing-header">
        <p className="closing-kicker">BEFORE YOU LEAVE, {visitorName.toUpperCase()}</p>
        <h1>{closingContent.title}</h1>
      </header>

      <div className="closing-editorial">
        <section className="closing-copy">
          {closingContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>

        <section className="closing-question-section" aria-labelledby="closing-question-heading">
          <p className="closing-question-kicker" id="closing-question-heading">AS YOU LEAVE, CONSIDER:</p>
          <div className="closing-questions">
            {closingContent.questions.map((question, index) => (
              <label className="closing-question" key={question}>
                <span className="closing-question-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="closing-question-text">{question}</span>
                <textarea
                  value={answers[index]}
                  onChange={(event) => updateAnswer(index, event.target.value)}
                  placeholder="A note to carry with you..."
                  rows={4}
                  aria-label={question}
                />
              </label>
            ))}
          </div>
          <p className="closing-storage-note">YOUR NOTES ARE SAVED ONLY ON THIS DEVICE.</p>
        </section>

        <footer className="closing-ending">
          {closingContent.ending.map((line) => <p key={line}>{line}</p>)}
        </footer>
      </div>
    </article>
  )
}
