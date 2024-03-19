import Image from 'next/image'

const Loading = () => {
  return (
    <div className="flex h-svh items-center justify-center">
      <Image
        src={
          'https://res.cloudinary.com/barzimtech/image/upload/v1708648459/ud3drroqim1zkaopsp7q.gif'
        }
        alt="Carregando..."
        width={300}
        height={300}
      />
    </div>
  )
}

export default Loading
