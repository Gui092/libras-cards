import type { Caractere, Sinal } from '../types/sinal'

type SinalCardProps = {
  sinal: Sinal
  aoClicar: (id: Caractere) => void
}

export function SinalCard({ sinal, aoClicar }: SinalCardProps) {
  return (
    <button type="button" onClick={() => aoClicar(sinal.id)}>
      <img src={sinal.imagem} alt={sinal.descricao} width={120} height={120} />
      <span>{sinal.id}</span>
    </button>
  )
}
