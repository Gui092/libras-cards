import './App.css'
import { SinalGrid } from './components/SinalGrid'
import { sinais } from './data/sinais'

function App() {
  return (
    <main>
      <h1>Libras Cards</h1>
      <SinalGrid sinais={sinais} aoClicar={console.log} />
    </main>
  )
}

export default App
