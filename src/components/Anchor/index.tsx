import { AnchorHTMLAttributes } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import Arrow from '../../../public/icon-arrow.svg';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
}

export function Anchor({title, ...rest}: Props) {
    return (
        <div className={styles.container}>
            <a {...rest}>
                {title}
            </a>            
            <Image src={Arrow} alt="arrow"/>            
        </div>
    );
}