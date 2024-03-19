import { cn } from '@/lib/utils'
import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const RelativeDate: React.FC<{ date: Date; className?: string }> = ({
  date,
  className,
}) => {
  const now = new Date()
  const diffInMilliseconds = now.getTime() - date.getTime()

  const minutesAgo = Math.floor(diffInMilliseconds / (1000 * 60))
  const hoursAgo = Math.floor(diffInMilliseconds / (1000 * 60 * 60))
  const daysAgo = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))

  let formattedDate

  if (minutesAgo < 1) {
    formattedDate = 'agora mesmo'
  } else if (minutesAgo < 60) {
    formattedDate = `${minutesAgo} minutos atrás`
  } else if (hoursAgo < 24) {
    formattedDate = `${hoursAgo} horas atrás`
  } else if (daysAgo < 1) {
    formattedDate = 'hoje'
  } else if (daysAgo < 2) {
    formattedDate = 'ontem'
  } else if (daysAgo < 14) {
    formattedDate = formatDistanceToNowStrict(date, {
      addSuffix: true,
      locale: ptBR,
    })
  } else {
    formattedDate = date.toLocaleDateString('pt-BR')
  }

  return (
    <div className={cn('mb-1 text-sm text-marfim-barzim', className)}>
      <>{formattedDate}</>
    </div>
  )
}

export default RelativeDate
