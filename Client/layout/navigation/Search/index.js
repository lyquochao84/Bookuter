import styles from "./search.module.css";

function SearchBar({ setResults, input, setInput, setShow }) {
  function fetchData(value) {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((book) => {
          return (
            value &&
            book &&
            book.title &&
            book.title.toLowerCase().includes(value) &&
            book.author
          );
        });
        setResults(results);
      });
  }

  function handleChange(value) {
    setInput(value);
    fetchData(value);
    setShow(false);
  }

  return (
    <>
      <input
        className={styles.search_bar}
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}

export default SearchBar;
