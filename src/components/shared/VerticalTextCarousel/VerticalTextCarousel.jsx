import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './VerticalTextCarousel.module.css';

export default function VerticalTextCarousel({ 
  items, 
  interval = 3000, 
  prefix = '', 
  className = '', 
  size = 'normal',
  variant = 'default' // 'default' or 'stacked'
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotating for all variants
  useEffect(() => {
    if (!items || items.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, items.length, interval]);

  // Stacked variant - React Bits style
  if (variant === 'stacked') {
    if (!items || items.length === 0) {
      return null;
    }

    return (
      <span className={`${styles.carouselStacked} ${className}`}>
        {prefix && <span className={styles.prefixStacked}>{prefix} </span>}
        <span className={styles.rotatingTextContainer}>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              className={styles.rotatingText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {items[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    );
  }

  // Default variant (original behavior)
  return (
    <span className={`${styles.carousel} ${styles[size]} ${className}`}>
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <span className={styles.slotContainer}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className={styles.slotText}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {items[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
