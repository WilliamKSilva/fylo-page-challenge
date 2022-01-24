import { Button } from '../Button';
import styles from './styles.module.scss';

export function Card() {
    return (
        <div className={styles.container}>
            <section>
                <strong>Get early access today</strong>
                <p>
                    It only takes a minute to sign up and
                    our free starter tier is extremely 
                    generous. If you have any questions, 
                    our support team would be happy to 
                    help you.
                </p>
            </section>
            <div className={styles.wrapperInputs}>
                <input placeholder="email@example.com"/>
                <Button title="Get Started For Free"/>
            </div>
        </div>
    );
}