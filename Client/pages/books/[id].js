import BooksDetailContent from "@/components/books-detail";
import styles from "./books-detail.module.css";
import Image from "next/image";

function BooksDetailPage({ bookDetail }) {
  const {
    id,
    title,
    description,
    author,
    stock,
    price,
    language,
    publisher,
    page_count,
    publication_date,
    genre,
  } = bookDetail;

  const imagePath = `/img/books/${genre}/${title}.jpg`;

  return (
    <div className={styles.book_detail_wrap}>
      <Image
        className={styles.book_detail_image}
        src={imagePath}
        alt={title}
        width={300}
        height={300}
      />
      <BooksDetailContent
        id={id}
        title={title}
        description={description}
        author={author}
        stock={stock}
        price={price}
        language={language}
        publisher={publisher}
        page_count={page_count}
        publication_date={publication_date}
        genre={genre}
      />
    </div>
  );
}

export default BooksDetailPage;

export async function getStaticProps(context) {
  const { params } = context;

  try {
    const booksId = params.id;
    const data = await fetch(`http://localhost:3001/books`);
    const bookData = await data.json();
    const bookDetail = bookData.find((book) => book.id == booksId);

    return {
      props: {
        bookDetail: bookDetail,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const data = await fetch(`http://localhost:3001/books`);
  const bookData = await data.json();

  const ids = bookData.map((book) => book.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
