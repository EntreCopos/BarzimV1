import { PiCodeFill } from 'react-icons/pi'

export const DevBadge: React.FC<{ size?: number }> = ({ size = 20 }) => {
  return (
    <span className="ml-2 text-lg text-yellow-barzim" title="DEV no Barzim">
      <PiCodeFill size={size} />
    </span>
  )
}
