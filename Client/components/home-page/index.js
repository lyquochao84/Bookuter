import { useState } from "react";
import Slider from "./slider";
import styles from "./content.module.css";
import BooksGrid from "./books-grid";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import CollectionGrid from "./collections-grid";
import ArticlePost from "./article-post";

const tabs = [
  { id: 0, title: 'All' },
  { id: 1, title: 'Fiction'},
  { id: 2, title: 'Non-Fiction'},
  { id: 3, title: 'Science'},
  { id: 4, title: 'History'},
  { id: 5, title: 'Horror'},
  { id: 6, title: 'Business'},
  { id: 7, title: 'Literature'},
  { id: 8, title: 'Mystery'},
  { id: 9, title: 'Romance'},
];

function HomePageContent(props) {  
  const { articles } = props;

  const [clicked, setClicked] = useState();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [startIndex, setStartIndex] = useState(0);

  // Change featured books tab
  function changeBtnTabHandler(tab) {
    setClicked(tab.id);
    setSelectedGenre(tab.title);
    setStartIndex(0);
  }

  // Filter books based on the selected genre
  const filteredBooks = props.books.filter((book) => {
    return selectedGenre === "All" || book.genre === selectedGenre;
  });

  // Limit 5 items per featured books part, and assign end index to change next and previous btn
  const endIndex = startIndex + 5;
  const showFeaturedBooks = filteredBooks.slice(startIndex, endIndex);

  // Next and Previous Button
  function changeNextBtn() {
    if (endIndex < filteredBooks.length) {
      setStartIndex(startIndex + 1);
    }
  }

  function changePrevBtn() {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  }

  return (
   <>
      <div className={styles.slider_wrap}>
        <Slider />
      </div>
      <div className={styles.featured_books_wrap}>
        <h2 className={styles.featured_books_title}>Featured Books</h2>
        <div className={styles.featured_books_tab}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={styles.featured_books_tabBtn}
              onClick={() => changeBtnTabHandler(tab)}
              style={{
                backgroundColor: tab.id === clicked ? "#eb6e6e" : "",
                color: tab.id === clicked ? "#fff" : "",
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className={styles.featured_books_slide}>
          <span
            className={styles.left_icon}
            onClick={changePrevBtn}
            style={{ 
              display: startIndex > 0 ? "block" : "none" 
            }}
          >
            <TfiArrowCircleLeft />
          </span>
          <BooksGrid books={showFeaturedBooks} />
          <span
            className={styles.right_icon}
            onClick={changeNextBtn}
            style={{
              display: endIndex < filteredBooks.length ? "block" : "none",
            }}
          >
            <TfiArrowCircleRight />
          </span>
        </div>
      </div>
      <div className={styles.featured_books_wrap}>
        <h2 className={styles.featured_books_title}>Collections</h2>
        <CollectionGrid />
      </div>
      <div className={styles.featured_books_wrap}>
        <h2 className={styles.featured_books_title}>Articles</h2>
        <ArticlePost articles={articles}/>
      </div>
    </>
   
  );
}

export default HomePageContent;
