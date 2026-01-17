import styles from './index.module.css';

type Props = {
    title: string;
    sub: string;
};

export default function Hero({ title, sub }: Props) {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{sub}</p>
            </div>
        </div>
    );
}
