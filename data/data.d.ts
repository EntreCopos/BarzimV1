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

interface TypeObjectCerveja {
  id: number
  mainImage: string | null
  nomeCerveja: string
  descriCerveja: string | null
  teorAlcoolico: number | null
  tempIdeal: string | null
  valorIBU: number | null
  corpo: string | null
  cervejariaId: number
  tipoCervejaId: number
  notaMedia: number | null
  ingredientes: string[]
  harmonizacoes: string[]
  tipoCerveja: {
    id: number
    nome: string
    descricao: string | null
  }
}

export interface CervejaDetails {
  teorAlcoolico: { key: string; value: number | null }
  tempIdeal: { key: string; value: string | null }
  valorIBU: { key: string; value: number | null }
  corpo: { key: string; value: string | null }
}

export interface Cervejaria {
  nome: string
  path: number
}

export interface CervejaBreadcrumbs {
  cervejaria: Cervejaria
  nome: string
}

export interface CervejaDetails {
  teorAlcoolico: { key: string; value: number | null }
  tempIdeal: { key: string; value: string | null }
  valorIBU: { key: string; value: number | null }
  corpo: { key: string; value: string | null }
}

export interface CervejariaBreadcrumb {
  nome: string
  path: number
}

export interface CervejaBreadcrumbs {
  cervejaria: CervejariaBreadcrumb
  nome: string
}

export interface User {
  name: string | null
  link: string | null
  bio: string
  image: string | null
  id: string
  username: string | null
  genero: string | null
  following: Following[]
  followers: Follower[]
}

export interface Following {
  id: string
  followerId: string
  followingId: string
  isRequested: boolean
  createdAt: Date
}

export interface Follower {
  id: string
  followerId: string
  followingId: string
  isRequested: boolean
  createdAt: Date
}

export { type AgeVerifFormData, type CervejaData, type TypeObjectCerveja }
