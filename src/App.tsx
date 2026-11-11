import './App.css'
import { SinalCard } from './components/SinalCard'
import { sinais } from './data/sinais'

function App() {
  return (
    <main>
      <h1>Libras Cards</h1>
      <SinalCard sinal={sinais[0]} aoClicar={console.log} />
    </main>
  )
}

export default App
