'use client'

import Confetti from 'react-confetti'
import { useEffect, useRef, useState } from 'react'

const BoxReviewAvaliada: React.FC<{
  beerName: string
  children: React.ReactNode
}> = ({ beerName, children }) => {
  const currentRef = useRef<HTMLDivElement>(null)
  const [currentSize, setCurrentSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (currentRef.current) {
      const { width, height } = currentRef.current!.getBoundingClientRect()
      setCurrentSize({ width, height })
    }
  }, [])

  return (
    <div
      ref={currentRef}
      className="relative flex h-full flex-col items-center space-y-8 px-8 py-24 text-center text-secondary-foreground"
    >
      <Confetti width={currentSize.width} height={currentSize.height} />
      <SuccessIcon />
      <h2 className="text-3xl font-semibold">Parabéns!</h2>
      <p className="text-lg">
        Você avaliou <span className="text-yellow-barzim">{beerName}</span>
      </p>
      <p className="text-lg">
        O Barzim é melhor graças a você.
        <br /> Compartilhe com seus amigos e ajude a espalhar a palavra do
        Barzim.
      </p>
      {children}
    </div>
  )
}

import { Controls, Player } from '@lottiefiles/react-lottie-player'

const SuccessIcon = () => {
  const animationURL = '/assets/barzim-yellow-bottles.json'
  return (
    <div className="flex h-36 w-36 items-center justify-center rounded-full bg-secondary">
      <Player
        style={{ width: '200px', aspectRatio: '1' }}
        autoplay
        loop
        src={animationURL}
      ></Player>
    </div>
  )
}

export default BoxReviewAvaliada
