import flag from "../assets/flag.png"

export default function RoleSelect({ setRole }) {

  const roles = [
    { name: "Army Officer", emoji: "🪖" },
    { name: "Freedom Fighter", emoji: "✊" },
    { name: "News Anchor", emoji: "🎤" },
    { name: "Common Citizen", emoji: "👨" }
  ]

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

      {/* ROLE CARD */}
      <div
        style={{
          background: "rgba(0,0,0,0.75)",
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

        <h2>Choose Your Role</h2>

        {roles.map((role, i) => (
          <button
            key={i}
            onClick={() => setRole(role.name)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255,255,255,0.15)",
              color: "white",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            {role.emoji} {role.name}
          </button>
        ))}

      </div>

    </div>
  )
}
