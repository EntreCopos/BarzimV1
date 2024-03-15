import { cn } from '@/lib/utils'
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
    <div
      className={cn(
        'grid gap-3 px-6 pb-4 pt-0 [grid-template-columns:_3fr_2fr]'
      )}
    >
      <section className={cn('flex gap-2 text-marfim-barzim ')}>
        {Object.keys(metrics).map((metricKey: keyof typeof metrics) => {
          const metric = metricKey as keyof typeof SocialLabels

          return (
            <div
              className={cn(
                'min-w-20 flex-1 rounded-md bg-slate-barzim p-1 text-center'
              )}
              key={metric}
            >
              <span>{metrics[metricKey]}</span>
              <h2 className={cn('text-xs lowercase')}>
                {SocialLabels[metric]}
              </h2>
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
