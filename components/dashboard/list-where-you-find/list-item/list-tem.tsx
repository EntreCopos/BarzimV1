interface ListItemProps {
  emoji: string
  title: string
  description: string
}

const ListItem: React.FC<ListItemProps> = ({ emoji, title, description }) => {
  return (
    <div className="flex items-center gap-4 border-b border-slate-barzim p-4">
      <span role="img" aria-label="emoji" className="text-4xl">
        {emoji}
      </span>
      <div>
        <p className="text-secondary-foreground">{title}</p>
        <p className="text-sm text-tabs-background">{description}</p>
      </div>
    </div>
  )
}

export default ListItem
