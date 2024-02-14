import Carousel from '@/components/dashboard/carousel/carousel';
import NavWrapper from '../../components/dashboard/nav-wrapper/nav-wrapper';
import styles from "./page.module.css"
import BeersCarousel from '@/components/dashboard/beers-carousel/beers-carousel';
import ListFindings from '@/components/dashboard/list-where-you-find/list-where-you-find';
import AvatarReview from '@/components/avatar/avatar-review/avatar-review';
import avatarImage from '../../components/assets/icons/Designer (11) 1.png'

const DashboardPage: React.FC = () => {
  return (
    <div className={styles.bodyDashboard}>
      <NavWrapper />
      <Carousel/>
      <BeersCarousel/>
      <ListFindings/>
      <AvatarReview avatarSrc={avatarImage}/>
    </div>
  );
};

export default DashboardPage;