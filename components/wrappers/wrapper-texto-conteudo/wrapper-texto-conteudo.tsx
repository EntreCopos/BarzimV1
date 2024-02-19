import { LogoCervejaria } from '@/components/logos/logo-cervejarias'
import LogoCervejariaImagem from '../../assets/logo-cervejas/Ambev - png (1).png'
import { BeerName } from '@/components/titles/beer-name'
import StarReviews from '@/components/stars/stars-reviews'
import { BrindarButton } from '@/components/buttons/brindar-button'
import { AddtoListButton } from '@/components/buttons/add-to-list-button'
import styles from './wrapper-texto-conteudo.module.css'

const WrapperTextoConteudo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <LogoCervejaria src={LogoCervejariaImagem} />
      <BeerName
        cerveja={{ nomeCerveja: 'Budweiser', tipoCerveja: 'American Lager' }}
        variant="dark-mode"
      />
      <StarReviews nota={2} />
      <div className={styles.buttonsContainer}>
        <BrindarButton /* onClick={() => console.log("Brindar button clicked")} */
        />
        <AddtoListButton /*onClick={() => console.log("Add to list button clicked")} */
        />
      </div>
    </div>
  )
}

export default WrapperTextoConteudo
