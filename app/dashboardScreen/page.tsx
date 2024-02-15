import Carousel from '@/components/dashboard/carousel/carousel';
import NavWrapper from '../../components/dashboard/nav-wrapper/nav-wrapper';
import styles from "./page.module.css"
import BeersCarousel from '@/components/dashboard/beers-carousel/beers-carousel';
import ListFindings from '@/components/dashboard/list-where-you-find/list-where-you-find';
import NinguemAvaliou from '@/components/cards/ninguem-avaliou/ninguem-avaliou';
import StarReviews from '@/components/stars/stars-reviews';
import StarReviewsMini from '@/components/stars/startsMini/stars-mini';
import ReviewHeader from '@/components/review/review-header/review-header';

const DashboardPage: React.FC = () => {
  return (
    <div className={styles.bodyDashboard}>
      <NavWrapper />
      <Carousel/>
      <BeersCarousel/>
      <ListFindings/>
      <NinguemAvaliou cervejaId='2'/>
      <StarReviews nota={2} />
    </div>
  );
};

export default DashboardPage;