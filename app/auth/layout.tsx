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
      <div className="absolute left-0 top-0 z-[0] h-full w-full ">
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
