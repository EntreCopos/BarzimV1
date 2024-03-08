import { Background } from '@/components/assets/background'
import { Logo } from '@/components/logos/logo-barzim'
import Link from 'next/link'
import { GoArrowLeft } from "react-icons/go"
import styles from './restricao.module.css'


export default async function RestricaoIdade() {

  return (
    <div>
      <Background
        mobileBackground="bg-hero-age-mobile"
        desktopBackground="md:bg-hero-age-desktop"
      >
        <div className={styles.wrapper}>

          <Logo color='#FFEEC3' width={320} className={styles.logo} />

          <div className={styles.main}>
            <h1 className='text-2xl font-bold mb-3'>Restrição de Idade</h1>
            <p>Lamentamos, mas <b>você não tem idade suficiente</b> para acessar este aplicativo.</p>
            <p>O Barzim está comprometido em promover o <b>consumo responsável de álcool.</b> De acordo com nossos termos de serviço e as leis locais, só é permitido o acesso a esta aplicação para <b>usuários com idade legal</b> para consumir bebidas alcoólicas em seu país de residência.</p>
            <p>Se você ainda não tem idade legal para consumir bebidas alcoólicas, recomendamos que você saia da aplicação agora.</p>
            <p>Se você é maior de idade e deseja acessar o aplicativo, por favor, <b>verifique sua idade novamente</b> e insira-a corretamente para continuar.</p>
            <button className={styles.back}>
              <GoArrowLeft />
              <Link href={'/age-verification'}>Voltar</Link>
            </button>
          </div>

        </div>
      </Background >
    </div >
  )
}