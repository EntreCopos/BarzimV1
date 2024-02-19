'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full' >
      <h2>Deu ruim ai colega!</h2>
      <button
        onClick={
          
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}