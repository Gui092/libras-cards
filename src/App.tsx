import './App.css'
import { SinalGrid } from './components/SinalGrid'
import { sinais } from './data/sinais'
import type { Caractere } from './types/sinal'
import { useState } from 'react'

const LIMITE_PALAVRA = 30

function App() {
  const [palavra, setPalavra] = useState<Caractere[]>([])

  function adicionarCaractere(id: Caractere) {
    setPalavra((atual) => {
      if (atual.length >= LIMITE_PALAVRA) return atual
      return [...atual, id]
    })
  }

  function apagarUltimo() {
    setPalavra((atual) => atual.slice(0, -1))
  }

  function limparPalavra() {
    setPalavra([])
  }

  return (
    <main>
      <h1>Libras Cards</h1>
      <SinalGrid sinais={sinais} aoClicar={adicionarCaractere} />
      <p aria-live="polite" aria-label="Palavra formada">
        {palavra.join('')}
      </p>
      <button
        type="button"
        onClick={apagarUltimo}
        disabled={palavra.length === 0}
      >
        Apagar
      </button>
      <button
        type="button"
        onClick={limparPalavra}
        disabled={palavra.length === 0}
      >
        Apagar tudo
      </button>
    </main>
  )
}

export default App
