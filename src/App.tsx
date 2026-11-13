import './App.css'
import { SinalGrid } from './components/SinalGrid'
import { sinais } from './data/sinais'
import type { Caractere } from './types/sinal'
import { useState } from 'react'
import { PalavraMontada } from './components/PalavraMontada'

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
      <PalavraMontada
        palavra={palavra}
        aoApagarUltimo={apagarUltimo}
        aoLimpar={limparPalavra}
      />
    </main>
  )
}

export default App
