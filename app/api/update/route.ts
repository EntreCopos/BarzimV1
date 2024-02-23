import { calculateAverageRatingForBeers } from '@/data/average-rating'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  try {
    await calculateAverageRatingForBeers()
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
