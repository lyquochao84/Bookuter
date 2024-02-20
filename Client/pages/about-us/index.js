import styles from './about-us.module.css';
import Image from 'next/image';

function AboutUs() {
    return (
        <div className={styles.about_us}>
            <Image 
                alt="About-US"
                className={styles.about_us_image}
                src='/img/about-us/about-us.jpg'
                width={500}
                height={550}
            />
            <div className={styles.about_us_paragraph}>
                <h1 className={styles.about_us_title}>ABOUT US</h1>
                <p className={styles.about_us_text}>
                    Welcome to Bookuter, your literary haven where the magic of storytelling comes to life! At Bookuter, we're passionate about connecting book lovers with their next great read. Dive into a curated collection of diverse genres, handpicked to ignite your imagination and satisfy your literary cravings. Whether you're a seasoned bibliophile or a casual reader, our user-friendly platform offers a seamless browsing and purchasing experience. Explore the world of literature at your fingertips, and let Bookuter be your trusted companion on your literary journey. Happy reading!
                </p>
            </div>
        </div>
    );
}

export default AboutUs;