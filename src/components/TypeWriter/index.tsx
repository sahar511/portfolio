import { useState, useEffect } from 'react';

import styles from './TypeWriter.style.module.css'


interface TypeWriterProps {
    text: string,
    delay: number,
    infinite : boolean
}


const Typewriter = ({ text, delay, infinite }: TypeWriterProps) => {
    
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    }
    else if (infinite) {
        setCurrentIndex(0);
        setCurrentText('');
      }
      return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span className={styles.text}>{currentText}</span>;
};

export default Typewriter;