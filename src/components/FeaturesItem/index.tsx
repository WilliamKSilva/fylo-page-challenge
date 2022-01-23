import styles from './styles.module.scss';
import Image from 'next/image';

interface Props {
    title: string;
    content: string;    
    image: StaticImageData
}

export function FeaturesItem({title, content, image}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperImage}>
                <Image src={image} alt=""/>
            </div>
            <strong>{title}</strong>
            <p>{content}</p>
        </div>
    );
}