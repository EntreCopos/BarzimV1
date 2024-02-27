import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina e mescla classes de estilo utilizando a biblioteca clsx e tailwind-merge.
 * @param {...ClassValue[]} inputs - Uma lista de valores de classe ou expressões condicionais.
 * @returns {string} Uma string contendo as classes de estilo combinadas.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Retorna as duas primeiras letras de uma string, em maiúsculas.
 * @param {string | undefined | null} name - O nome do usuário.
 * @returns {string} As duas primeiras letras do nome, em maiúsculas, ou 'US' se o nome for undefined ou null.
 */
export function firstTwoLetters(name: string | undefined | null): string {
  if (typeof name == 'undefined' || name == null) return 'US'

  return name.substring(0, 2).toUpperCase()
}

/**
 * Remove a parte inicial de uma URL.
 * @param {string} src - A URL a ser sanitizada.
 * @returns {string} A URL sanitizada, sem a parte inicial.
 */
export function sanitizeUserLink(src: string): string {
  return src.split('://')[1] as string
}

/**
 * Embaralha os elementos de um array.
 * @param {any[]} array - O array a ser embaralhado.
 * @returns {any[]} O array com seus elementos embaralhados.
 */
export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/**
 * Converte uma string para o formato de título.
 * @param {string} beer - A string a ser convertida.
 * @returns {string} A string convertida para o formato de título.
 */
export const normalizeTitleCase = (beer: string) => {
  return beer.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
    return match.toUpperCase()
  })
}

export const convertFileToBase64 = async (file: File) => {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  return new Promise((resolve, reject) => {
    if (!Buffer.isBuffer(buffer)) {
      reject(new Error('O argumento passado não é um Buffer.'))
      return
    }
    const base64String = buffer.toString('base64')
    resolve(base64String)
  })
}
