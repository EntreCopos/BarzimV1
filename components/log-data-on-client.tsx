'use client'

import { Button } from './ui/button'

export const LogDataClient = (data: any) => {
  return (
    <Button
      variant="outline"
      className="w-fit"
      onClick={() => console.log(data)}
    >
      Log Data
    </Button>
  )
}
