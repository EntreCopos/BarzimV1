import * as z from 'zod'

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimo de 6 caracteres, querido',
  }),
})

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'E-mail é necessário',
  }),
})

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'E-mail é necessário',
  }),
  password: z.string().min(1, {
    message: 'Precisa da senha',
  }),
  code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'E-mail é necessário',
  }),
  name: z.string(),
  password: z.string().min(6, {
    message: 'No minimo 6 caracteres, né',
  }),
})

export const AccountSettingsSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome não pode estar vazio. Seu nome atual será mantido.',
  }),
  username: z
    .string()
    .min(2, { message: 'O nome de usuário não pode estar vazio.' }),
  link: z.string(),
  cep: z.string(),
  bio: z.string(),
  genero: z.string(),
})

export const AddCervejaSchema = z.object({
  nomeCerveja: z.string().min(3, {
    message: 'cerveja precisa ter um nome, filhão',
  }),
  teorAlcoolico: z.string(),
  imagem: z.string(),
  codBarras: z.string(),
  marcaId: z.string(),
  cervejariaId: z.string(),
  tipoCervejaId: z.string(),
})

const currYear = new Date().getFullYear()
export const AgeVerificationSchema = z.object({
  day: z.coerce.number().int().min(1).max(31),
  month: z.coerce.number().int().min(1).max(12),
  year: z.coerce.number().int().min(1900).max(currYear),
})

export const cervejariaSchema = z.object({
  nome: z
    .string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }),
  logo: z.string().optional(),
})

export const tipoCervejaSchema = z.object({
  nome: z
    .string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }),
  descricao: z
    .string()
    .min(5, { message: 'A descrição deve ter pelo menos 5 caracteres' }),
})

export const cervejaSchema = z.object({
  mainImage: z.any(),
  nomeCerveja: z.string(),
  descriCerveja: z.string().optional(),
  teorAlcoolico: z.coerce.number().optional(),
  tempIdeal: z.string().optional(),
  valorIBU: z.coerce.number().optional(),
  corpo: z.string().optional(),
  cervejariaId: z.coerce.number(),
  tipoCervejaId: z.coerce.number(),
  ingredientesCerveja: z.string(),
  harmonizacoesCerveja: z.string(),
})
