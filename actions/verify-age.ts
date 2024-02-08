'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

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

export default async function verifyAge(isoDate: string) {
  const age = calculateAge(isoDate)
  if (age <= 18) {
    console.log('n vai entrar naooo')
    redirect('https://www.peppapig.com/en-us/')
  } else {
    console.log('liberado senhor')
    cookies().set('dateOfBirth', isoDate, {
      secure: true,
      expires: Date.now() + 60 * 60 * 1000,
    })
    redirect('/dashboard')
  }
}
