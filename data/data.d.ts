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
  mainImage: string
  nomeCerveja: string
  descriCerveja: string | null
  teorAlcoolico: number | null
  tempIdeal: string | null
  valorIBU: number | null
  corpo: string | null
  cervejariaId: number
  tipoCervejaId: number
  notaMedia: number | null
  ingredientesCerveja: any[] | null
  harmonizacoesCerveja: any[] | null
  createdAt: Date | null
  cervejaria: {
    id: number
    nome: string
    createdAt: Date | null
    logo: string | null
  }
  tipoCerveja: {
    id: number
    nome: string
    descricao: string | null
    createdAt: Date | null
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
  id: string
  name: string | null
  username: string | null
  image: string | null
  bio: string | null
  link: string | null
  role: string
  genero: string | null
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

export type TReview = {
  id: number
  reviewTexto: string | null
  reviewLikes: number | null
  nota: number | null
  createdAt: Date | null
  imagens: string[]
  usuario: {
    name: string | null
    username: string | null
    image: string | null
  }
  cerveja: {
    nomeCerveja: string
    id: number
  }
}

export interface CloudinaryResponse {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: string[]
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  folder: string
  api_key: string
}

export { type AgeVerifFormData, type CervejaData, type TypeObjectCerveja }
