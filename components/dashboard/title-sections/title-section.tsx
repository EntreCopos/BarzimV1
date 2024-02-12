// SectionTitle component
import React, { type ReactNode } from 'react';
import styles from './title-section.module.css';

interface SectionTitleProps {
  title: ReactNode; // Assuming title is a required prop
  button?: ReactNode; // Optional prop for the button
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, button }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2 className={styles.title}>{title}</h2>
      {button && <div className={styles.buttonContainer}>{button}</div>}
    </div>
  );
};

export default SectionTitle;
