
import PropTypes from 'prop-types'; 
import styles from './list-item.module.css';

interface ListItemProps {
  emoji: string;
  title: string;
  description: string;
}

const ListItem: React.FC<ListItemProps> = ({ emoji, title, description }) => {
  return (
    <div className={styles.listItem}>
      <span role="img" aria-label="emoji" className={styles.emoji}>
        {emoji}
      </span>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListItem;
