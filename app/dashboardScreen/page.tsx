import Carousel from '@/components/dashboard/carousel/carousel';
import NavWrapper from '../../components/dashboard/nav-wrapper/nav-wrapper';
import styles from "./page.module.css"
import BeersCarousel from '@/components/dashboard/beers-carousel/beers-carousel';
import ListFindings from '@/components/dashboard/list-where-you-find/list-where-you-find';


const DashboardPage: React.FC = () => {

  return (
    <div className={styles.bodyDashboard}>
      <NavWrapper />
      <Carousel />
      <BeersCarousel />
      <ListFindings />
    </div>
  );
};

export default DashboardPage;