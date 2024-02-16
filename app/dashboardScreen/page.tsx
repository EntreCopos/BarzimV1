import Carousel from '@/components/dashboard/carousel/carousel';
import NavWrapper from '../../components/dashboard/nav-wrapper/nav-wrapper';
import styles from "./page.module.css"
import BeersCarousel from '@/components/dashboard/beers-carousel/beers-carousel';
import ListFindings from '@/components/dashboard/list-where-you-find/list-where-you-find';
import UnconventionalTabs from '@/components/stepper/stepper-listas/stepper-listas';
import imgTest from '../../components/assets/icons/designer.png'
import { AddImageButton } from '@/components/buttons/add-image-review-button';
import SendReviewButton from '@/components/buttons/send-review-button/send-review-button';
import { TextareaReview } from '@/components/ui/textareaReview';
import WrapperDescricaoReviewBotaoReview from '@/components/wrappers/wrapper-descricao-review-botao-review/wrapper-descricao-review-botao-review';


const DashboardPage: React.FC = () => {

  return (
    <div className={styles.bodyDashboard}>
      <NavWrapper />
      <Carousel />
      <BeersCarousel />
      <ListFindings />
      <WrapperDescricaoReviewBotaoReview />

    </div>
  );
};

export default DashboardPage;