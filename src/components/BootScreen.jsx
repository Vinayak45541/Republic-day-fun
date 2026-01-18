import { useEffect, useState } from "react"
import flag from "../assets/flag.png"

const steps = [
  "Initializing Patriotism Kernel...",
  "Loading National Spirit Modules...",
  "Connecting To Bharat Server...",
  "Flag Loaded Successfully",
  "Emotion Engine Online",
  "Boot Complete"
]

export default function BootScreen({ onFinish }) {

  const [index, setIndex] = useState(0)

  useEffect(() => {

    let timer

    if (index < steps.length - 1) {
      timer = setTimeout(() => {
        setIndex(prev => prev + 1)
      }, 850)
    } else {
      timer = setTimeout(onFinish, 1300)
    }

    return () => clearTimeout(timer)

  }, [index, onFinish])

  return (
    <div
      className="page-enter"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top,#020617,#000000)",
        borderTop: "5px solid #ff9933",
        borderBottom: "5px solid #138808",
        color: "#00ff88",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace"
      }}
    >

      {/* FLAG HERO ICON */}
      <img
        src={flag}
        style={{
          width: "90px",
          marginBottom: "10px",
          animation: "float 3s ease-in-out infinite",
          filter: "drop-shadow(0 0 12px rgba(255,153,51,0.6))"
        }}
      />

      <h2>DESHBHAKT OS</h2>

      <p>{steps[index]}</p>

      {/* PROGRESS BAR */}
      <div
        style={{
          width: "260px",
          height: "10px",
          background: "#111",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${((index + 1) / steps.length) * 100}%`,
            background: "linear-gradient(90deg,#ff9933,#ffffff,#138808)",
            transition: "0.4s"
          }}
        />
      </div>

    </div>
  )
}
