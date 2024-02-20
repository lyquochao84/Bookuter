import styles from './favorite-list-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

function FavoriteListItem({ book }) {
    const { id, title, language, price, genre } = book;

    const imagePath = `/img/books/${genre}/${title}.jpg`;
    const linkPath = `/books/${id}`;

    return (
        <li className={styles.favorite_list_item}>
            <Link href={linkPath}>
                <div className={styles.favorite_list_image_wrap}>
                    <Image 
                        src={imagePath}
                        alt={title}
                        width={100}
                        height={100}
                        layout="responsive"
                    />
                </div>
                <div className={styles.favorite_list_information}>
                    <h3 className={styles.favorite_list_information_title}>{title}</h3>
                    <p className={styles.favorite_list_information_language}>{language}</p>
                    <p className={styles.favorite_list_information_price}>{`$${price}.00`}</p>
                </div>
            </Link>
        </li>
    );
}

export default FavoriteListItem;