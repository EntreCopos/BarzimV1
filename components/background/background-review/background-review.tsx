import { useLayoutEffect, useState, useRef } from 'react';

interface BackgroundReviewProps {
  imageUrl: string;
}

const BackgroundReview: React.FC<BackgroundReviewProps> = ({ imageUrl }) => {
  const [imageHeight, setImageHeight] = useState<number>(400);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        const minHeight = 100;
        const newHeight = Math.max(minHeight, 400 - scrollPosition);
        setImageHeight(newHeight);
      }
    };

    handleScroll(); // Chamamos a função inicialmente para definir a altura correta na renderização inicial.

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: `${imageHeight}px` }}>
      <img ref={imageRef} src={imageUrl} alt="Responsive Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default BackgroundReview;
