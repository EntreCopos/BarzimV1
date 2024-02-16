import Carousel from '@/components/dashboard/carousel/carousel';
import NavWrapper from '../../components/dashboard/nav-wrapper/nav-wrapper';
import styles from "./page.module.css"
import BeersCarousel from '@/components/dashboard/beers-carousel/beers-carousel';
import ListFindings from '@/components/dashboard/list-where-you-find/list-where-you-find';
import UnconventionalTabs from '@/components/stepper/stepper-listas/stepper-listas';
import imgTest from '../../components/assets/icons/designer.png'
import { AddImageButton } from '@/components/buttons/add-image-review-button';
import WrapperReviewImage from '@/components/wrappers/wrapper-review-image/wrapper-review-image';

const DashboardPage: React.FC = () => {

  return (
    <div className={styles.bodyDashboard}>
      <NavWrapper />
      <Carousel />
      <BeersCarousel />
      <ListFindings />
      <WrapperReviewImage/>
    </div>
  );
};

export default DashboardPage;