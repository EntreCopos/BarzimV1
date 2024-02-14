import styles from './beers-carousel.module.css';
import SectionTitle from '../title-sections/title-section';
import BeerCard from './beer-card/beer-card';
import imgBeer from "../../assets/imgs-beers/image 1.png";
import Link from 'next/link';

const BeersCarousel: React.FC = () => {
    const buttonElement = (
        <button className={styles.customButton}>
         <Link href={'/cervejas'}>Ver mais</Link> 
        </button>
    );

    return (
        <div className={styles.carousel}>

            <SectionTitle
                title="Você pode se interessar por..."
                button={buttonElement} />
            <div className={styles.cardsBeers}>
                <BeerCard
                    imageUrl={imgBeer}
                    title="American Lager"
                    description="Berrió do Piauí"
                />
                <BeerCard
                    imageUrl={imgBeer}
                    title="American Lager"
                    description="Berrió do Piauí"
                />
                <BeerCard
                    imageUrl={imgBeer}
                    title="American Lager"
                    description="Berrió do Piauí"
                />
                <BeerCard
                    imageUrl={imgBeer}
                    title="American Lager"
                    description="Berrió do Piauí"
                />
            </div>
        </div>
    );
}

export default BeersCarousel;
