
import styles from './carousel.module.css';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import CarouselCard from './carousel-card/carousel-card';
import imgIconCardAmigos from "../../assets/icons/frame (1).png"
import imgIconCardRecomendacoes from "../../assets/icons/frame (2).png"
import imgIconCardRecentes from "../../assets/icons/frame.png"
import SectionTitle from '../title-sections/title-section';

const CarouselWrapper: React.FC = () => {
    return (
        <div className={styles.carousel}>
            <SectionTitle title="Dando uma volta pelo Barzim"/>
            <Carousel className="w-full max-w-sm">
                <CarouselContent className="flex">
                    <CarouselItem className="flex space-x-1">
                        <CarouselCard
                            title="Amigos"
                            imageSrc={imgIconCardAmigos}
                            altText="Imagem Redonda"
                        />
                        <CarouselCard
                            title="Mais Recentes"
                            imageSrc={imgIconCardRecentes}
                            altText="Imagem Redonda"
                        />
                        <CarouselCard
                            title="Recomendações"
                            imageSrc={imgIconCardRecomendacoes}
                            altText="Imagem Redonda"
                        />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default CarouselWrapper;
