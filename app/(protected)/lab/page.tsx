import { LuFlaskConical } from 'react-icons/lu'

export default function Lab() {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center space-y-4 bg-red-400 p-6">
      <div className="flex">
        <LuFlaskConical size={72} />
        <div className="flex flex-col">
          <h1 className="text-4xl">Lab</h1>
          <p>Nenhum experimento rolando nesse momento</p>
        </div>
      </div>
    </div>
  )
}
