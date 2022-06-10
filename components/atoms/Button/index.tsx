import React from 'react';
import styles from './Button.module.scss';

interface Props {
  title: string;
  type: 'button' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<Props> = ({
  title,
  onClick,
  className,
  type = 'button',
}) => (
  <button type={type} className={styles.button} onClick={onClick}>
    <h6>{title}</h6>
  </button>
);

export default Button;
