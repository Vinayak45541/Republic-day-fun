import { useEffect, useState } from "react"

export default function PatriotChallenge({ onFinish }) {

  const [time, setTime] = useState(30)
  const [score, setScore] = useState(0)

  useEffect(() => {

    if (time === 0) {
      onFinish(score)
      return
    }

    const timer = setTimeout(() => {
      setTime(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)

  }, [time])

  const handleFlagClick = () => {
    setScore(prev => prev + 1)
  }

  const handleDistraction = () => {
    setScore(prev => prev - 1)
  }

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>

      <h2>⏱ Patriot Challenge</h2>
      <h3>Time Left: {time}s</h3>
      <h3>Score: {score}</h3>

      <button
        onClick={handleFlagClick}
        style={{
          padding: "20px",
          margin: "10px",
          fontSize: "20px"
        }}
      >
        TAP FLAG
      </button>

      <button
        onClick={handleDistraction}
        style={{
          padding: "20px",
          margin: "10px",
          fontSize: "20px"
        }}
      >
        📱 DISTRACTION
      </button>

    </div>
  )
}
