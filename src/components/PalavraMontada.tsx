import type { Caractere } from '../types/sinal'

type PalavraMontadaProps = {
  palavra: Caractere[]
  aoApagarUltimo: () => void
  aoLimpar: () => void
}

export function PalavraMontada({
  palavra,
  aoApagarUltimo,
  aoLimpar,
}: PalavraMontadaProps) {
  const vazio = palavra.length === 0

  return (
    <section aria-label="Palavra formada">
      <p aria-live="polite">{palavra.join('')}</p>
      <button type="button" onClick={aoApagarUltimo} disabled={vazio}>
        Apagar último
      </button>
      <button type="button" onClick={aoLimpar} disabled={vazio}>
        Limpar tudo
      </button>
    </section>
  )
}
