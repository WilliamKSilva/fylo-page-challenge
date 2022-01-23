import Image from 'next/image';
import styles from './styles.module.scss'

interface Props {
    content: string;
    image: StaticImageData;
    name: string;
    role: string;

}

export function Quotes({content, image, name, role}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>{content}</p>
                <div className={styles.wrapperProfile}>
                    <section>
                        <Image src={image} alt=""/>
                    </section> 
                    <div>
                        <strong>{name}</strong>
                        <p>{role}</p>                                               
                    </div>
                </div>
            </div>
        </div>
    );
}