import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import { put } from '@vercel/blob'

cloudinary.config({
  cloud_name: process.env.CLD_NAME,
  api_key: process.env.CLD_KEY,
  api_secret: process.env.CLD_SEC,
})

export async function POST(request: Request): Promise<NextResponse> {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false, error: 'No file received' })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'image',
          folder: 'review_pics',
        },
        (error, result) => {
          if (error) {
            console.error('error:', error)
            reject(error)
          } else {
            resolve(result)
          }
        }
      )
      .end(buffer)
  })
    .then((result) => {
      return NextResponse.json(result)
    })
    .catch((error) => {
      return NextResponse.json({ success: false, error: error })
    })
}
