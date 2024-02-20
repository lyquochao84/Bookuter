import styles from "./collections.module.css";
import BooksGrid from "../../components/bookstype-page/books-grid";

const bookTypes = [
  { id: 1, title: "Fiction" },
  { id: 2, title: "Non-Fiction" },
  { id: 3, title: "Science" },
  { id: 4, title: "History" },
  { id: 5, title: "Horror" },
  { id: 6, title: "Business" },
  { id: 7, title: "Literature" },
  { id: 8, title: "Mystery" },
  { id: 9, title: "Romance" },
];

function TypesPages(props) {
  const { bookTypes } = props;

  return (
    <div className={styles.bookstype_wrap}>
      <h2 className={styles.bookstype_title}>{bookTypes[0].genre}</h2>
      <BooksGrid bookTypes={bookTypes} />
    </div>
  );
}

/**
 *  Example:
 *  params: {
 *      slug: 'Non-Fiction'
 *  }
 *    .../collections/Non-Fiction
 */

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const resBooktypes = await fetch(`http://localhost:3001/books/${slug}`);
    const bookTypes = await resBooktypes.json();

    if (!bookTypes) {
      return { notFound: true };
    }

    return {
      props: {
        bookTypes: bookTypes,
      },
    };
  } 
  catch (error) {    
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const paths = bookTypes.map((slug) => (
    {
      params: {
        slug: slug.title,
      },
    }
  ));

  return {
    paths,
    fallback: false,
  };
}

export default TypesPages;
