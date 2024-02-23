import { SpeedInsights } from '@vercel/speed-insights/next'
import dynamic from 'next/dynamic'

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SpeedInsights />
      <PostHogPageView />
      {children}
    </>
  )
}
