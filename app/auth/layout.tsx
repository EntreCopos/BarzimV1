import Image from 'next/image'

import bg1 from '@/public/images/bg-age-desktop.png'
import bg2 from '@/public/images/bg-register-desktop.png'
import bg3 from '@/public/images/bg-login-desktop.png'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const backgroundImages = [bg1, bg2, bg3]

  const randomBg =
    backgroundImages[Math.round(Math.random() * backgroundImages.length)]

  return (
    <div className="relative grid min-h-screen w-full items-center bg-yellow-barzim">
      <div className="absolute left-0 top-0 z-[1] h-full w-full">
        <Image
          objectFit="cover"
          placeholder="blur"
          src={randomBg}
          fill={true}
          alt="Background"
        />
      </div>
      <div className="z-[9]">{children}</div>
    </div>
  )
}

export default AuthLayout

const blurDataURL =
  'data:image/webp;base64,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'
