/* eslint-disable @typescript-eslint/consistent-type-imports */
// data.d.ts

interface CervejaData {
  nomeCerveja: string
  teorAlcoolico: number
  imagem: string
  codBarras: string
  marcaId: number
  cervejariaId: number
  tipoCervejaId: number
}

interface AgeVerifFormData {
  day: number
  month: number
  year: number
}

interface TypeListaDeCerveja {
  map(arg0: ({ id, nomeCerveja, mainImage, tipoCerveja: { nome: tipoCerveja }, }: { id: number; nomeCerveja: string; mainImage: string; tipoCerveja: { nome: string } }) => import("react").JSX.Element): import("react").ReactNode
  id: number
  mainImage: string | null
  nomeCerveja: string
  descriCerveja: string | null
  teorAlcoolico: number | null
  tempIdeal: string | null
  valorIBU: number | null
  corpo: string | null
  informacoesNutricionais: string[] | null
  tamanhosEmbalagem: string[] | null
  cervejariaId: number
  tipoCervejaId: number
  notaMedia: number | null
  ingredientes: string[] | null
  harmonizacoes: string[] | null
  tipoCerveja: {
    id: number
    nome: string
    descricao: string | null
  }
}

export { type CervejaData, type AgeVerifFormData, type TypeListaDeCerveja }
