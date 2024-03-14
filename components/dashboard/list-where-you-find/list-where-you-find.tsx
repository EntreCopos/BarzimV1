import Link from 'next/link'
import SectionTitle from '../title-sections/title-section'
import ListItem from './list-item/list-tem'
import styles from './list-where-you-find.module.css'

const ListFindings: React.FC = () => {
  return (
    <div className={styles.container}>
      <SectionTitle title="No Barzim você encontra" />
      <Link href={'/usuarios'}>
        <ListItem
          emoji="👥"
          title="Os Migos"
          description="Seus amigos já estão no Barzim?"
        />
      </Link>
      <Link href={'/cervejas'}>
        <ListItem
          emoji="🌟"
          title="Melhores Cervejas"
          description="Com essas não tem erro, a festa tá garantida!"
        />
      </Link>
      <ListItem
        emoji="📝"
        title="Minhas Listas"
        description="Você nunca mais vai esquecer aquela cerveja (em breve)"
      />
    </div>
  )
}

export default ListFindings
