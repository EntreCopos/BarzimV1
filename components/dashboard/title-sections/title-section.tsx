// SectionTitle component
import React, { type ReactNode } from 'react'
import styles from './title-section.module.css'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: ReactNode // Assuming title is a required prop
  button?: ReactNode // Optional prop for the button
  variant?: 'large' | 'small'
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  button,
  variant = 'large',
}) => {
  return (
    <div className={styles.sectionTitle}>
      <h2
        className={cn(
          'mt-4',
          variant !== 'large' ? styles.titleSmall : styles.title
        )}
      >
        {title}
      </h2>
      {button && <div className={styles.buttonContainer}>{button}</div>}
    </div>
  )
}

export default SectionTitle
