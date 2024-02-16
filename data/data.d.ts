import { TypeObjectCerveja } from '@/data/data';
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

interface TypeObjectCerveja {
  id: number;
  mainImage: string | null
  nomeCerveja: string
  descriCerveja: string | null
  teorAlcoolico: number | null
  tempIdeal: string | null
  valorIBU: number | null
  corpo: string | null
  tamanhosEmbalagem: string[]
  cervejariaId: number
  tipoCervejaId: number
  notaMedia: number | null
  ingredientes: string[]
  harmonizacoes: string[]
  tipoCerveja: {
    id: number
    nome: string
    descricao: string
  }
}

export { type CervejaData, type AgeVerifFormData, type TypeObjectCerveja }
