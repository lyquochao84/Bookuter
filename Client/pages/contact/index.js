import styles from './contact.module.css';

function Contact() {
    return (
        <div className={styles.contact_wrap}>
            <h1 className={styles.contact_title}>CONTACT US</h1>
            <div className={styles.contact_information}>
                <p className={styles.contact_name}>Bookuter</p>
                <p className={styles.contact_address}>1234 Lampson Avenue, Garden Grove, CA 92841</p>
                <p className={styles.contact_email}>bookuter@gmail.com</p>
                <p className={styles.contact_phone}>(714)-890-1234</p>
            </div>
        </div>
    );
}

export default Contact;