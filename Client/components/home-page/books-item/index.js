import styles from './books-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

function BooksItem(props) {
    const { genre, title, language, price } = props.book;

    const imagePath = `/img/books/${genre}/${title}.jpg`;
    const linkPath = `/books/${title}`;

    return (
        <li className={styles.books_item}>
            <Link href={linkPath}>
                <div className={styles.books_item_image_wrap}>
                    <Image 
                        src={imagePath}
                        alt={title}
                        width={100}
                        height={100}
                        layout="responsive"
                    />
                </div>
                <div className={styles.books_item_information}>
                    <h3 className={styles.books_item_information_title}>{title}</h3>
                    <p className={styles.books_item_information_language}>{language}</p>
                    <p className={styles.books_item_information_price}>{`$${price}.00`}</p>
                </div>
            </Link>
        </li>
    );
}

export default BooksItem;