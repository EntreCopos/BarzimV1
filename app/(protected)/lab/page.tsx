import { LogDataClient } from '@/components/log-data-on-client'
import { getUserSocialProfile } from '@/data/social'
import { LuFlaskConical } from 'react-icons/lu'

export default async function Lab() {
  const andre = await getUserSocialProfile('andre')

  return (
    <div className="flex h-full w-full flex-col items-start justify-center space-y-4 bg-red-400 p-6">
      <div className="flex">
        <LuFlaskConical size={72} />
        <div className="flex flex-col">
          <h1 className="text-4xl">Lab</h1>
          <LogDataClient data={andre} />
          <pre>{JSON.stringify(andre, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
