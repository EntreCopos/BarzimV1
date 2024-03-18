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
  if (typeof name == 'undefined' || name == null) return ''

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
export function shuffleArray(array: unknown[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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

/**
 * Converte um arquivo para uma string base64.
 * @param file O arquivo a ser convertido.
 * @returns Uma Promise que resolve com a string base64 do arquivo.
 */
export const convertFileToBase64 = async (file: File): Promise<string> => {
  // Converte o arquivo para um ArrayBuffer
  const bytes = await file.arrayBuffer()

  // Converte o ArrayBuffer para um Buffer
  const buffer = Buffer.from(bytes)

  return new Promise<string>((resolve, reject) => {
    if (!Buffer.isBuffer(buffer)) {
      reject(new Error('Argumento passado não é um Buffer'))
      return
    }

    // Converte o Buffer para uma string base64
    const base64String = buffer.toString('base64')

    // Resolve a Promise com a string base64
    resolve(base64String)
  })
}

/**
 * Converte um arquivo bruto para base64.
 * @param {RAFile} file - o arquivo bruto a ser convertido
 * @return {Promise} uma promessa que resolve para a representação base64 do arquivo bruto
 */
export const convertRawFileToBase64 = (file: {
  rawFile: File
  src?: string
  title?: string
}): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file.rawFile)
  })

/**
 * Verifica se a diferença entre a data fornecida e a data atual é menor que duas semanas.
 * @param dataString Uma string representando a data no formato ISO 8601.
 * @returns True se a diferença for menor que duas semanas, false caso contrário.
 */
export const haMenosDeDuasSemanas = (dataString: Date): boolean => {
  const dataFornecida: Date = new Date(dataString)
  const dataAtual: Date = new Date()

  // Calcula a diferença em milissegundos
  const diferencaEmMilissegundos: number = Math.abs(
    dataFornecida.getTime() - dataAtual.getTime()
  )

  // Converte milissegundos para semanas
  const semanas: number = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 7)

  // Retorna true se a diferença for menor que duas semanas
  return semanas < 2
}
