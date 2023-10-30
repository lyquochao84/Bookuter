import BooksItem from '../books-item';
import styles from './booksgrid.module.css';

function BooksGrid(props) {
    const { books } = props;

    return (
        <ul className={styles.books_grid}>
            {books.map((book) => 
                <BooksItem key={book.id} book={book}/>
            )}
        </ul>
    );
}

export default BooksGrid;