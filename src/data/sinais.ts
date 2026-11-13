import { CARACTERES } from '../types/sinal.ts'
import type { Sinal } from '../types/sinal.ts'

const numeros = '0123456789'


export const sinais: Sinal[] = CARACTERES.map((caractere) => ({
  id: caractere,
  descricao: `${numeros.includes(caractere) ? "Número" : "Letra"}${caractere} `,
  imagem: `/sinais/${caractere.toLowerCase()}.webp`,
}))
