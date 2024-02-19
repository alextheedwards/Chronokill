// public/components/Button.tsx
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, href }) => {
  const defaultClickHandler = () => {
    // Your default logic here
    console.log('Default button clicked!');
  };

  if (href) {
    // If href is provided, render a Link component
    return (
      <Link href={href}>
        <div className={styles.button}>{children}</div>
      </Link>
    );
  }

  return (
    <button className={styles.button} onClick={onClick || defaultClickHandler}>
      {children}
    </button>
  );
};

export default Button;
