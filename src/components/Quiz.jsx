import { useState } from "react"
import { quizData } from "../data/quizData"
import flag from "../assets/flag.png"

function Quiz({ setQuizDone, setFinalScore }) {

  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const progress = ((index + 1) / quizData.length) * 100

  const handleAnswer = (points) => {

    const newScore = score + points
    setScore(newScore)

    if (index + 1 < quizData.length) {
      setIndex(prev => prev + 1)
    } else {
      setFinalScore(newScore)
      setQuizDone(true)
    }
  }

  return (
    <div
      className="page-enter"
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(rgba(2,6,23,0.85), rgba(2,6,23,0.85)),
          linear-gradient(135deg,#ff9933,#ffffff,#138808)
        `,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      {/* QUIZ CARD */}
      <div
        style={{
          background: "rgba(0,0,0,0.75)",
          padding: "30px",
          borderRadius: "16px",
          width: "360px",
          animation: "glowPulse 3s infinite"
        }}
      >

        {/* FLAG HEADER */}
        <img
          src={flag}
          style={{
            width: "70px",
            display: "block",
            margin: "0 auto 10px",
            animation: "float 3s ease-in-out infinite",
            filter: "drop-shadow(0 0 10px rgba(255,153,51,0.6))"
          }}
        />

        {/* PROGRESS BAR */}
        <div
          style={{
            height: "8px",
            background: "#1e293b",
            marginBottom: "12px",
            borderRadius: "10px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg,#ff9933,#138808)",
              transition: "0.3s"
            }}
          />
        </div>

        <h3>{quizData[index].question}</h3>

        {quizData[index].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.points)}
            style={{
              width: "100%",
              padding: "10px",
              margin: "8px 0",
              borderRadius: "10px",
              border: "none",
              background: "#1e293b",
              color: "white"
            }}
          >
            {opt.text}
          </button>
        ))}

      </div>

    </div>
  )
}

export default Quiz
