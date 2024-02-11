
import SectionTitle from '../title-sections/title-section';
import ListItem from './list-item/list-tem'; // Corrija o nome do arquivo se necessário
import styles from './list-where-you-find.module.css';

const ListFindings: React.FC = () => {
    return (
        <div className={styles.container}>
            <SectionTitle title="No Barzim você encontra" />
            <ListItem
                emoji="👥"
                title="Os Migos"
                description="Seus amigos já estão no Barzim?" />
            <ListItem
                emoji="🌟"
                title="Melhores Cervejas"
                description="Com essas não tem erro, a festa tá garantida!" />
            <ListItem
                emoji="📝"
                title="Minhas Listas"
                description="Você nunca mais vai esquecer aquela cerveja" />
        </div>
    );
};

export default ListFindings;
