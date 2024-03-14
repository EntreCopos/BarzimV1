import styles from './list-item.module.css'

interface ListItemProps {
  emoji: string
  title: string
  description: string
}

const ListItem: React.FC<ListItemProps> = ({ emoji, title, description }) => {
  return (
    <div className={styles.listItem}>
      <span role="img" aria-label="emoji" className={styles.emoji}>
        {emoji}
      </span>
      <div>
        <p className="text-secondary-foreground">{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default ListItem
