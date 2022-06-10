import React from 'react';
import styles from './Button.module.scss';
import { MapPropsToStyles } from '../../../helper/MapPropsToStyles';

export enum BUTTON_SIZE {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
}

export enum BUTTON_TYPE {
  primary = 'primary',
  secondary = 'secondary',
}

interface Props {
  title: string;
  type: 'button' | 'submit';
  size: BUTTON_SIZE;
  style: BUTTON_TYPE;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<Props> = ({
  title,
  onClick,
  size,
  style,
  type = 'button',
}) => {
  const classes = MapPropsToStyles(styles, `${size} ${style}`);
  return (
    <button
      type={type}
      className={`${styles.button} ${classes}`}
      onClick={onClick}
    >
      <h6>{title}</h6>
    </button>
  );
};

export default Button;
