import styles from './styles.module.scss';
import { ImStack } from 'react-icons/im';

export function Header() {
    return (
        <header className={styles.container}>
            <section className={styles.section}>
                <div>
                    <ImStack color="hsl(0, 0%, 100%)" className={styles.logoIcon}/>
                    <strong>Fylo</strong>
                </div>
                <nav>
                    <strong>Features</strong>
                    <strong>Team</strong>
                    <strong>Sign In</strong>
                </nav>
            </section>
        </header>
    );
}