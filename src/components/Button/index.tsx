import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;    
}

export function Button({title, ...rest}: Props) {
    return (
        <button className={styles.button} {...rest}>
            {title}
        </button>
    );
}