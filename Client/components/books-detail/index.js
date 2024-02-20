import styles from "./books-detail-content.module.css";
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { BiHeartCircle } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import AddToCartBtn from "../add-cart-button";
import BuyNowBtn from "../buy-now-button";
import Link from "next/link";
import { AuthUserContext } from "@/context/userContext";

async function saveBook(id, title, language, price, genre) {
  const response = await fetch("http://localhost:3001/users/favorite-list", {
    method: "POST",
    body: JSON.stringify({ id, title, language, price, genre }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

function BooksDetailContent({
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
}) {
  const { user } = useContext(AuthUserContext);
  const [changeFavBtnColor, setChangeFavBtnColor] = useState(() => {
    if (typeof window !== "undefined") {
      const storedColor = localStorage.getItem(`book_${user_id}_${id}_fav_color`);
      return storedColor ? JSON.parse(storedColor) : false;
    }
  });
  const [isFavoriteBook, setIsFavoriteBook] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // Description button
  function toggleDescription() {
    setShowDescription(!showDescription);
  }

  // Books Detail button
  function toggleInfo() {
    setShowInfo(!showInfo);
  }

  // Change favorite book button color
  function changeFavColorBtn() {
    setChangeFavBtnColor(!changeFavBtnColor);
    localStorage.setItem(
      `book_${user_id}_${id}_fav_color`,
      JSON.stringify(!changeFavBtnColor)
    );
  }

  // Save favorite book
  const saveBookHandler = async (e) => {
    e.preventDefault();

    if (user) {
      const response = await saveBook(user_id, id, title, language, price, genre);
      alert(response.message);
      console.log(user_id);

      // Toggle the state or update the UI based on the response
      if (response.message.includes("Book removed from favorites")) {
        setIsFavoriteBook(false);
        localStorage.removeItem(`book_${id}_fav_color`);
      } 
      else {
        setIsFavoriteBook(true);
      }
    } 
    else {
      alert("Please sign in to use this feature");
    }
  };

  // Add To Cart
  const addCartHandler = async (e) => {
    e.preventDefault();

    if (user) {
    } else {
      alert("Please sign in to use this feature");
    }
  };

  // Buy Now
  const buyNowHandler = async (e) => {
    e.preventDefault();

    if (user) {
    } else {
      alert("Please sign in to use this feature");
    }
  };

  function checkStock() {
    if (stock === 0) {
      return `Sold Out`;
    }

    return stock < 5 ? `Low Stock - ${stock} available` : "In Stock";
  }
  const stockStyle = stock < 5 ? styles.lowStock : styles.inStock;

  // Format the publication date
  const dateObj = new Date(publication_date);

  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");

  const publishDate = `${month}/${day}/${year}`;

  return (
    <>
      <div className={styles.book_detail_info_wrap}>
        <h2 className={styles.book_detail_title}>{title}</h2>
        <p className={styles.book_detail_price}>{`$${price}.00`}</p>
        <p className={styles.book_detail_author}>
          By <span className={styles.bold_text}>{author}</span>
        </p>
        <p className={`${styles.book_detail_stock} ${stockStyle} `}>
          {checkStock()}
        </p>
        <div className={styles.book_detail_description_wrap}>
          <FaBars className={styles.book_detail_description_icon} />
          <span
            className={styles.book_detail_description_text}
            onClick={toggleDescription}
          >
            Description
          </span>
          {showDescription && (
            <p className={styles.book_detail_description}>{description}</p>
          )}
        </div>
        <div className={styles.book_detail_more_info}>
          <FaBars className={styles.book_detail_description_icon} />
          <span
            className={styles.book_detail_description_text}
            onClick={toggleInfo}
          >
            Book Details
          </span>
          {showInfo && (
            <>
              <p className={styles.book_detail_publisher}>
                <span className={styles.bold_text}>Publisher: </span>
                {publisher}
              </p>
              <p className={styles.book_detail_publication_date}>
                <span className={styles.bold_text}>Publication Date: </span>
                {publishDate}
              </p>
              <p className={styles.book_detail_language}>
                <span className={styles.bold_text}>Language: </span>
                {language}
              </p>
              <p className={styles.book_detail_page_count}>
                <span className={styles.bold_text}>Pages: </span>
                {page_count}
              </p>
              <p className={styles.book_detail_genre}>
                <span className={styles.bold_text}>Genre: </span>
                {genre}
              </p>
            </>
          )}
        </div>
        <AddToCartBtn addCartHandler={addCartHandler} />
        <BuyNowBtn buyNowHandler={buyNowHandler} />
        <div className={styles.additional_feature_wrap}>
          <div className={styles.register_now_wrap}>
            <Link href="/sign-up" className={styles.register_now}>
              Register
            </Link>
          </div>
          <a onClick={saveBookHandler}>
            <BiHeartCircle
              className={styles.save_to_fav_icon}
              onClick={changeFavColorBtn}
              style={{
                color: user ? (!changeFavBtnColor ? "" : "#e3e388") : "",
              }}
            />
          </a>
        </div>
        <div className={styles.share_on_part_wrap}>
          <h3 className={styles.share_on_text_line}>Share On</h3>
          <div className={styles.share_on_icon_wrap}>
            <BsFacebook className={styles.share_on_icon} />
            <BsInstagram className={styles.share_on_icon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksDetailContent;
