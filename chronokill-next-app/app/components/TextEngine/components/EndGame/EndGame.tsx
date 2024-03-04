import React from 'react';
import styles from './styles.module.css';
import { Button } from "../../../index";

interface EndGamePopupProps {
    isVisible: boolean;
    onClose: () => void;
    message: string;
}

export const EndGamePopup = ({ 
    isVisible,
    onClose,
    message 
}: EndGamePopupProps) => {
  if (!isVisible) return null;

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <div className={styles.message}>{message}</div>
        <div className={styles.buttonWrapper}>
            <Button href="/mainmenu">Quit to Main Menu</Button>
        </div>
      </div>
    </div>
  );
};

export default EndGamePopup;
