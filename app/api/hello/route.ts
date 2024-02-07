import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  console.log(req)

  return NextResponse.json({ message: 'Hello from Next' }, { status: 200 })
}
