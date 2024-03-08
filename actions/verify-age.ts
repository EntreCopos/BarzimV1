'use server'

import { type AgeVerifFormData } from '@/data/data'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

/**
 * Calcula a idade com base na data de nascimento fornecida.
 * @param {string} birthdate - A data de nascimento no formato "YYYY-MM-DD".
 * @returns {number} A idade calculada.
 */
function calculateAge(birthdate: string): number {
  const birthDateObj: Date = new Date(birthdate)
  const currentDate: Date = new Date()

  const yearsDiff: number =
    currentDate.getFullYear() - birthDateObj.getFullYear()
  const currentMonth: number = currentDate.getMonth() + 1
  const birthMonth: number = birthDateObj.getMonth() + 1

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth &&
      currentDate.getDate() < birthDateObj.getDate())
  ) {
    return yearsDiff - 1
  } else {
    return yearsDiff
  }
}

/**
 * Verifica a idade do usuário com base nos dados fornecidos e redireciona conforme a idade.
 * @param {AgeVerifFormData} data - Os dados de verificação de idade, incluindo o ano, mês e dia de nascimento.
 * @returns {Promise<void>} Uma promessa que resolve após a verificação da idade e o redirecionamento apropriado.
 */
export default async function verifyAge(data: AgeVerifFormData) {
  const isoDateOfBirth = new Date(
    data?.year,
    data?.month - 1,
    data?.day,
    0,
    0,
    0
  ).toISOString()

  const age = calculateAge(isoDateOfBirth)
  if (age < 18) {
    redirect('/restricao-idade')
  } else {
    cookies().set('dateOfBirth', isoDateOfBirth, {
      httpOnly: true,
      expires: Date.now() + 60 * 60 * 1000,
    })
    redirect('/')
  }
}
