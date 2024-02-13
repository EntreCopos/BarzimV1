'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { AgeVerifFormData } from '@/data/data'

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

export default async function verifyAge(data: AgeVerifFormData) {
  console.log('action recebeu:::', data)
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
    console.log('n vai entrar naooo')
    redirect('https://www.peppapig.com/en-gb')
  } else {
    console.log('liberado senhor')
    cookies().set('dateOfBirth', isoDateOfBirth, {
      httpOnly: true,
      expires: Date.now() + 60 * 60 * 1000,
    })
    redirect('/')
  }
}
