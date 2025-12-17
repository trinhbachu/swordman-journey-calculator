import { useState } from 'react'
import './App.css'

function App() {
  const [attack, setAttack] = useState(0)
  const [attackPercent, setAttackPercent] = useState(0)
  const [def, setDef] = useState(0)
  const [defPercent, setDefPercent] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [speedPercent, setSpeedPercent] = useState(0)
  const [martialArtName, setMartialArtName] = useState('')
  const [savedInputs, setSavedInputs] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const total = (attackPercent !== 0 ? Number(attack) * (1 + Number(attackPercent) / 100) : 0) +
      (defPercent !== 0 ? Number(def) * (1 + Number(defPercent) / 100) : 0) +
      (speedPercent !== 0 ? Number(speed) * (1 + Number(speedPercent) / 100) : 0)
    
    setSavedInputs([...savedInputs, {
      attack,
      attackPercent,
      def,
      defPercent,
      speed,
      speedPercent,
      martialArtName,
      totalScore: total
    }])
  }

  return (
    <>
      <h1>Swordman Journey Calculator</h1>
      <form onSubmit={handleSubmit} className="card">
        <div>
          <label>Attack: </label>
          <input type="number" value={attack} onChange={(e) => setAttack(e.target.value)} placeholder="0" />
          <label> %: </label>
          <input type="number" value={attackPercent} onChange={(e) => setAttackPercent(e.target.value)} placeholder="0" />
        </div>
        <div>
          <label>Defense: </label>
          <input type="number" value={def} onChange={(e) => setDef(e.target.value)} placeholder="0" />
          <label> %: </label>
          <input type="number" value={defPercent} onChange={(e) => setDefPercent(e.target.value)} placeholder="0" />
        </div>
        <div>
          <label>Speed: </label>
          <input type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} placeholder="0" />
          <label> %: </label>
          <input type="number" value={speedPercent} onChange={(e) => setSpeedPercent(e.target.value)} placeholder="0" />
        </div>
        <div>
          <label>Martial Art Name: </label>
          <input type="text" value={martialArtName} onChange={(e) => setMartialArtName(e.target.value)} placeholder="Enter name" />
        </div>
        <button type="submit">Calculate</button>
      </form>

      {savedInputs.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {savedInputs.map((input, index) => (
            <div key={index} className="card">
              <h2>Results</h2>
              <p><strong>Total Score:</strong> {input.totalScore.toFixed(2)}</p>
              <p><strong>Martial Art:</strong> {input.martialArtName || 'N/A'}</p>
              <h3>Inputs:</h3>
              <p>Attack: {input.attack} (+{input.attackPercent}%)</p>
              <p>Defense: {input.def} (+{input.defPercent}%)</p>
              <p>Speed: {input.speed} (+{input.speedPercent}%)</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default App
