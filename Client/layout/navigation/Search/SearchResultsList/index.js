import styles from "./search-results-list.module.css";
import SearchResult from "../SearchResults";

function SearchResultsList({ user, results, setInput, setShow }) {
  return (
    <ul className={user ? styles.search_list_user : styles.search_list}>
      {results && results.length > 0 ? (
        results.map((result, id) => (
          <SearchResult
            result={result}
            key={id}
            setShow={setShow}
            setInput={setInput}
          />
        ))
      ) : (
        <p className={styles.no_result_found}>No Result Found</p>
      )}
    </ul>
  );
}

export default SearchResultsList;
