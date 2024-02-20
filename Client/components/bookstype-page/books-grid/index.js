import BooksItem from "../books-item";
import styles from './books-grid.module.css';

function BooksGrid({ bookTypes }) {
    return (
        <ul className={styles.books_grid}>
            {bookTypes.map((book) => 
                <BooksItem key={book.id} book={book} />
            )}
        </ul>
    );
}

export default BooksGrid;