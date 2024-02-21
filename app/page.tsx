import NavWrapper from '@/components/dashboard/nav-wrapper/nav-wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='h-svh'>
      <div className=' h-[100%] flex-col md:flex-row-reverse items-center justify-center gap-10 flex  w-full  bg-black-radial-gradient '>
        <section>
          <Image src="https://res.cloudinary.com/barzimtech/image/upload/v1708452416/vwlpjq1r2hhxoyyyqyek.png" width={700} height={500} alt="Barzim mockup" />
        </section>
        <section className="px-4  max-w-screen-xl">
          <div className="flex items-center">
            <div>
              <h2 className="mb-4 text-4xl font-extrabold text-white">Seja bem-vindo(a) ao <span className='text-yellow-barzim'>Barzim</span></h2>
              <p className="mb-6 font-light text-gray-400 md:text-lg">Descubra. Avalie. Compartilhe.</p>
              <div className="flex space-x-4">
                <Link href="/auth/register" className="bg-yellow-barzim text-black hover:bg-yellow-400 focus:bg-yellow-400 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg px-6 py-3 text-lg">
                  Criar Conta
                </Link>
                <Link href="/auth/login" className="bg-black text-white hover:bg-zinc-900 focus:bg-gray-800 focus:ring-1 focus:ring-yellow-barzim font-medium rounded-lg px-6 py-3 text-lg">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>

  )
}

export default Home