import { useState } from "react"

import BootScreen from "./components/BootScreen"
import RoleSelect from "./components/RoleSelect"
import ControlRoom from "./components/ControlRoom"

import DeshbhaktMode from "./components/DeshbhaktMode"
import Quiz from "./components/Quiz"
import Result from "./components/Result"

function App() {

  const [bootDone, setBootDone] = useState(false)
  const [role, setRole] = useState(null)
  const [challengeDone, setChallengeDone] = useState(false)
  const [challengeScore, setChallengeScore] = useState(0)

  const [quizDone, setQuizDone] = useState(false)
  const [finalScore, setFinalScore] = useState(0)

  if (!bootDone) {
    return <BootScreen onFinish={() => setBootDone(true)} />
  }

  if (!role) {
    return <RoleSelect setRole={setRole} />
  }

  if (!challengeDone) {
    return (
      <ControlRoom
  onFinish={(score) => {
    setChallengeScore(score)
    setChallengeDone(true)
  }}
/>
    )
  }

  return (
    <div>

      <h2 style={{ textAlign: "center" }}>
        Role Selected: {role}
      </h2>

      <DeshbhaktMode />

      {!quizDone ? (
        <Quiz setQuizDone={setQuizDone} setFinalScore={setFinalScore} />
      ) : (
        <Result score={finalScore + challengeScore} />
      )}

    </div>
  )
}

export default App
