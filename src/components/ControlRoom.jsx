import { useState } from "react"

const situations = [
  {
    text: "Parade Truck Broke Down 🚛",
    options: [
      { label: "Call Backup Vehicle", score: 2 },
      { label: "Cancel Parade", score: -2 },
      { label: "Push Manually", score: 1 }
    ]
  },
  {
    text: "Anthem Speaker Failed 🔇",
    options: [
      { label: "Use Backup Speaker", score: 2 },
      { label: "Play From Mobile", score: 1 },
      { label: "Ignore Issue", score: -2 }
    ]
  },
  {
    text: "Crowd Is Getting Restless 😬",
    options: [
      { label: "Start Cultural Show", score: 2 },
      { label: "Do Nothing", score: -1 },
      { label: "Announce Delay", score: 1 }
    ]
  }
]

export default function ControlRoom({ onFinish }) {

  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const handleChoice = (points) => {

    const newScore = score + points
    setScore(newScore)

    if (index + 1 < situations.length) {
      setIndex(prev => prev + 1)
    } else {
      onFinish(newScore)
    }
  }

  return (
    <div  className="page-enter" style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top,#0f172a,#020617)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div style={{
        background: "rgba(255,255,255,0.08)",
        padding: "30px",
        borderRadius: "16px",
        width: "360px",
        textAlign: "center",
        animation: "glowPulse 3s infinite"

      }}>

        <div style={{
          height: "6px",
          background: "linear-gradient(90deg,#ff9933,#ffffff,#138808)",
          marginBottom: "12px"
        }} />

        <h2>🎛 Republic Control Room</h2>

        <h3>{situations[index].text}</h3>

        {situations[index].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleChoice(opt.score)}
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
            {opt.label}
          </button>
        ))}

        <p>Decision Score: {score}</p>

      </div>

    </div>
  )
}
