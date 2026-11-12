import type { Caractere, Sinal } from '../types/sinal'
import { SinalCard } from './SinalCard'

type SinalGridProps = {
  sinais: Sinal[]
  aoClicar: (id: Caractere) => void
}

export function SinalGrid({ sinais, aoClicar }: SinalGridProps) {
  return (
    <section aria-label="Grade de sinais">
      {sinais.map((sinal) => (
        <SinalCard key={sinal.id} sinal={sinal} aoClicar={aoClicar} />
      ))}
    </section>
  )
}
