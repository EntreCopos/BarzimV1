const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const backgroundImages = [
    'https://res.cloudinary.com/barzimtech/image/upload/q_auto,f_auto/w_1200/v1709954628/background_images/bg-age-desktop_xjkjf6.png',
    'https://res.cloudinary.com/barzimtech/image/upload/q_auto,f_auto/w_1200/v1709954612/background_images/bg-register-desktop_dgzxb5.png',
    'https://res.cloudinary.com/barzimtech/image/upload/q_auto,f_auto/w_1200/v1709954609/background_images/bg-login-desktop_e8m05z.png',
  ]

  const randomBg =
    backgroundImages[Math.round(Math.random() * backgroundImages.length)]

  return (
    <div
      style={{ backgroundImage: `url(${randomBg})` }}
      className="relative grid min-h-screen w-full items-center bg-yellow-barzim bg-cover p-2"
    >
      {children}
    </div>
  )
}

export default AuthLayout
