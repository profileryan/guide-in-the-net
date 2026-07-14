import { useEffect, useState, type ChangeEvent } from 'react'
import { closingContent } from '../content/guideContent'
import {
  LEGACY_CLOSING_STORAGE_KEY,
  readLegacyClosingReflections,
  readReflectionResponse,
  saveReflectionResponse,
} from '../utils/reflections'

type Props = {
  visitorName: string
}

function readStoredReflections() {
  const shared = closingContent.questions.map((_, index) => readReflectionResponse(`closing:${index}`))
  const legacy = readLegacyClosingReflections(closingContent.questions.length)
  return shared.map((answer, index) => answer || legacy[index] || '')
}

export default function ClosingReflectionPage({ visitorName }: Props) {
  const [answers, setAnswers] = useState<string[]>(readStoredReflections)

  useEffect(() => {
    try {
      localStorage.setItem(LEGACY_CLOSING_STORAGE_KEY, JSON.stringify(answers))
    } catch {
      // The reflection remains usable when device storage is unavailable.
    }

    answers.forEach((answer, index) => {
      saveReflectionResponse({
        id: `closing:${index}`,
        section: 'CONTINUE?',
        source: 'FINAL REFLECTION',
        prompt: closingContent.questions[index],
        order: 5000 + index,
      }, answer)
    })
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
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) => updateAnswer(index, event.target.value)}
                  placeholder="Write a thought, doubt, contradiction or question..."
                  rows={4}
                  maxLength={600}
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
