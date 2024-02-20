import Link from "next/link";
import Image from "next/image";
import styles from "./search-result.module.css";

function SearchResult({ result, setInput, setShow }) {
  const { id, title, genre, price } = result;

  const priceFormat = `$${price}.00`;
  const linkPath = `/books/${id}`;
  const image = `/img/books/${genre}/${title}.jpg`;

  function handleClick() {
    setShow(!show);
  }

  return (
    <Link
      href={linkPath}
      className={styles.search_result_link}
      onClick={() => {
        setShow(true);
        setInput("");
      }}
    >
      <li className={styles.search_result}>
        <Image
          className={styles.search_result_image}
          src={image}
          alt={title}
          id={id}
          width={100}
          height={100}
        />
        <div className={styles.search_result_info}>
          <h4 className={styles.search_result_title}>{title}</h4>
          <p className={styles.search_result_price}>{priceFormat}</p>
        </div>
      </li>
    </Link>
  );
}

export default SearchResult;
