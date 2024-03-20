import Link from 'next/link'
import FollowForm from '../forms/form-follow'
import React from 'react'
import { MdSettings } from 'react-icons/md'
import { Button } from '../ui/button'

enum SocialLabels {
  avaliacaoUserCount = 'Avaliações',
  userFollowingsCount = 'Seguindo',
  userFollowersCount = 'Seguidores',
}

interface Metrics {
  [key: string]: number
}

export const SocialBar: React.FC<{
  metrics: Metrics
  myId: string
  userId: string
  relationship: boolean
}> = ({ metrics, myId, userId, relationship }) => {
  return (
    <div className="grid grid-cols-[repeat(5,1fr)] gap-3 border-2 border-green-400 px-6 pb-4 pt-0 ">
      <section className="col-span-3 flex gap-2 text-marfim-barzim ">
        {Object.keys(metrics).map((metricKey: keyof typeof metrics) => {
          const metric = metricKey as keyof typeof SocialLabels

          return (
            <div
              className="min-w-20 flex-1 basis-1/3 rounded-md bg-slate-barzim p-1 text-center"
              key={metric}
            >
              <span>{metrics[metricKey]}</span>
              <h2 className="text-xs lowercase">{SocialLabels[metric]}</h2>
            </div>
          )
        })}
      </section>

      {!!(myId !== userId) ? (
        <FollowForm myId={myId} user={userId} relationship={relationship} />
      ) : (
        <Link href={`/config`}>
          <Button
            className="h-full w-full text-2xl text-black"
            variant="default"
          >
            <MdSettings />
          </Button>
        </Link>
      )}
    </div>
  )
}
