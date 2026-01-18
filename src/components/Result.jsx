import flag from "../assets/flag.png"
import confetti from "canvas-confetti"
import { useEffect } from "react"

function Result({ score }) {

  let title = ""
  let desc = ""

  if (score >= 20) {
    title = "Certified Deshbhakt Pro Max "
    desc = "High discipline, strong patriot values."
  }
  else if (score >= 14) {
    title = "Responsible Citizen 🫡"
    desc = "Balanced respect with modern lifestyle."
  }
  else if (score >= 8) {
    title = "Social Media Patriot 📲"
    desc = "More online patriotism than real action."
  }
  else {
    title = "Holiday Enjoyer 😴"
    desc = "Republic Day = long weekend vibes."
  }

  // 🎆 Confetti on load
  useEffect(() => {
    confetti({
      particleCount: 300,
      spread: 150,
      origin: { y: 0.6 }
    })
  }, [])

  return (
    <div
      className="page-enter"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg,#ff9933,#ffffff,#138808)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 10s ease infinite",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      {/* RESULT CARD */}
      <div
        style={{
          background: "rgba(0,0,0,0.8)",
          padding: "30px",
          borderRadius: "18px",
          width: "360px",
          textAlign: "center",
          animation: "glowPulse 3s infinite"
        }}
      >

        {/* FLAG HERO */}
        <img
          src={flag}
          style={{
            width: "90px",
            marginBottom: "12px",
            animation: "float 3s ease-in-out infinite",
            filter: "drop-shadow(0 0 12px rgba(255,153,51,0.7))"
          }}
        />

        <h2>{title}</h2>
        <p>{desc}</p>

        <h3>Score: {score}</h3>

        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#22c55e",
            color: "#000",
            fontWeight: "bold",
            width: "100%"
          }}
        >
          RESTART
        </button>

      </div>

      {/* FLOATING FLAG DECOR */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          fontSize: "32px",
          animation: "float 3s ease-in-out infinite"
        }}
      >
        
      </div>

    </div>
  )
}

export default Result
