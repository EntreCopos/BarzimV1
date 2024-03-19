'use client'
import { BarLoader } from 'react-spinners'

// import Image from 'next/image'

const Loading = () => {
  return (
    <div className="flex h-svh items-center justify-center">
      <BarLoader loading color="#fec435" />
    </div>
  )
}

export default Loading
