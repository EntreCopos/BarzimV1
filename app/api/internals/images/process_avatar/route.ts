import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import { put } from '@vercel/blob'

cloudinary.config({
  cloud_name: process.env.CLD_NAME,
  api_key: process.env.CLD_KEY,
  api_secret: process.env.CLD_SEC,
})

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const filename = searchParams.get('filename') || ''

  if (filename && request.body) {
    const blob = await put(filename, request.body, {
      access: 'public',
    })

    const result = await cloudinary.uploader.upload(blob.url, {
      folder: 'profile_pics',
      use_filename: true,
    })

    return NextResponse.json(result)
  } else {
    return NextResponse.json({ message: 'not good' }, { status: 400 })
  }
}
