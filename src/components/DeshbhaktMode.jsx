import { useState, useRef } from "react"
import confetti from "canvas-confetti"

import anthemSound from "../assets/sounds/anthem.mp3"
import cheerSound from "../assets/sounds/cheer.mp3"

function DeshbhaktMode() {

  const [active, setActive] = useState(false)

  const anthemRef = useRef(new Audio(anthemSound))
  const cheerRef = useRef(new Audio(cheerSound))

  const activateMode = () => {

    // Toggle mode
    setActive(prev => !prev)

    const anthem = anthemRef.current
    const cheer = cheerRef.current

    anthem.volume = 0.5
    cheer.volume = 0.7

    // If already playing → pause
    if (!anthem.paused) {
      anthem.pause()
      anthem.currentTime = 0
      return
    }

    // Play fresh
    anthem.currentTime = 0
    anthem.play()
    cheer.play()

    // Stop anthem at 58 seconds
    setTimeout(() => {
      anthem.pause()
      anthem.currentTime = 0
    }, 58000)

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    })
  }

  return (
    <div   style={{
      textAlign: "center",
      padding: "30px",
      background: active
        ? "linear-gradient(90deg,#ff9933,#ffffff,#138808)"
        : "#111827",
      color: active ? "#000" : "#fff"
    }}>

      <div className="overlay">

        <h2>🔥 Deshbhakt Mode 🔥</h2>

        <button
          onClick={activateMode}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "none"
          }}
        >
          {active ? "STOP MODE ❌" : "ACTIVATE MODE 🚩"}
        </button>

        {active && <h3>Patriotism Activated Successfully 😎</h3>}

      </div>

    </div>
  )
}

export default DeshbhaktMode
