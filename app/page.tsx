import { Logo } from '@/components/logos/logo-barzim'
import styles from '@/public/home.module.css'
import { Montserrat, Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const poppins = Poppins({
  weight: ['700'],
  subsets: ['latin'],
})

const montserrat = Montserrat({
  weight: ['400', '800'],
  subsets: ['latin'],
})

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.topLine}></div>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <Logo width={150} />
            </div>
          </header>
          <section className={styles.contentFig}>
            <div className='images-container'>
              <Image src='https://res.cloudinary.com/barzimtech/image/upload/v1708708960/qsrg37bo1jsim2rrha7r.png' width={120} height={120} alt='Lúpulo - Barzim' className={`${styles.hop1}`} />
              <Image src='https://res.cloudinary.com/barzimtech/image/upload/v1708708961/jt2hmc70hifczwplhbhd.png' width={350} height={350} alt='Garrafa Barzim 1' className={`${styles.botter1}`} />
              <Image src='https://res.cloudinary.com/barzimtech/image/upload/v1708708961/liekdoufok73auo9jbjl.png' width={350} height={250} alt='Garrafa Barzim 2' className={`${styles.botter2}`} />
              <Image src='https://res.cloudinary.com/barzimtech/image/upload/v1708708960/qsrg37bo1jsim2rrha7r.png' width={100} height={100} alt='Lúpulo - Barzim' className={`${styles.hop2}`} />
              <Image src='https://res.cloudinary.com/barzimtech/image/upload/v1708708960/qsrg37bo1jsim2rrha7r.png' width={100} height={100} alt='Lúpulo - Barzim' className={`${styles.hop3}`} />
              <Image src='https://res.cloudinary.com/barzimtech/image/upload/v1708708961/jza5cip5p4hwvbaq9ghx.png' width={350} height={250} alt='Garrafa Barzim 3' className={`${styles.botter3}`} />
            </div>
          </section>
        </div>
        <div className={`${styles.rightSide} bg-black-radial-gradient`}>
          <header className={styles.rightHeader}>
            <nav className={styles.nav}>
              <ul className={`${styles.navList} ${montserrat.className}`}>
                <li className={styles.navItem}><Link href='#'>O que é o Barzim?</Link></li>
                <li className={styles.navItem}><Link href='https://dev.barzim.tech/equipe'>A Equipe</Link></li>
                <li className={styles.navItem}><Link href='#'>Contato</Link></li>
                <li className={`${styles.CTAbutton} rounded-lg`}><Link href='/auth/login'>Entrar</Link></li>
              </ul>
            </nav>
          </header>
          <section className={`${styles.content}`}>
            <h1 className={`${styles.title} ${poppins.className}`}>Bem-vindo(a) ao <span className={styles.barzim}>Barzim</span></h1>
            <p className={`${styles.slogan} ${montserrat.className}`}>Descubra. Avalie. Compartilhe.</p>
            <div className={styles.buttons}>
              <button className={styles.registerButton}><Link href={'/auth/register'}>Criar Conta</Link></button>
              <button className={styles.loginButton}><Link href={'/auth/login'}>Login</Link></button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
