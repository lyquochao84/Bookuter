import styles from './privacy.module.css';

function Privacy() {
    return (
        <div className={styles.privacy_wrap}>
            <h1 className={styles.privacy_title}>OUR PRIVACY</h1>
            <ul className={styles.privacy_information}>
                <li className={styles.privacy_item}>Bookuter ensures that customers' privacy and personal information will be protected and will not be provided to any third parties.</li>
                <br/>
                <li className={styles.privacy_item}>Bookuter also ensures that the store's books ensure 100% quality and origin, have a clear, legal origin, and are safe for users.</li>
                <br/>
                <li className={styles.privacy_item}>In case your book is damaged or not as desired, we can ensure your rights via email at bookuter@gmail.com or on our personal Facebook page to get the refunds.</li>
            </ul>
        </div>
    );
}

export default Privacy;