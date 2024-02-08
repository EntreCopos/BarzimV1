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

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: 'E-mail é necessário',
    }),
    name: z.string(),
    dateOfBirth: z.string().refine(
      (value) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        return dateRegex.test(value)
      },
      {
        message: 'Hmmm, esse formato de data não é válido',
      }
    ),
    password: z.string().min(6, {
      message: 'No minimo 6 caracteres, né',
    }),
    confirmPassword: z.string().min(1, 'É necessário confirmar a Senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Senhas não são iguais',
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
