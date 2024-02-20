import Image from "next/image";
import Link from "next/link";

import styles from "./navigation.module.css";
import { SlBasket } from "react-icons/sl";

import SearchBar from "./Search";
import SearchResultsList from "./Search/SearchResultsList";

import { useState } from "react";
import { useContext } from "react";
import { AuthUserContext } from "@/context/userContext";

const navigation = [
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

function NavigationBar() {
  // Seach Part
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  // User Part
  const { user, logoutHandler } = useContext(AuthUserContext);

  const logoutButtonHandler = async () => {
    await logoutHandler();
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.image_wrapper}>
        <Link href="/">
          <Image
            src="/img/Logo.JPG"
            width={300}
            height={100}
            alt="Logo Image"
            quality={100}
          />
        </Link>
      </div>
      <>
        <SearchBar
          setResults={setResults}
          input={input}
          setInput={setInput}
          setShow={setShow}
        />
        {!show && input.trim() !== "" && (
          <SearchResultsList
            user={user}
            results={results}
            setShow={setShow}
            setInput={setInput}
          />
        )}
      </>
      <ul className={styles.navigation_items}>
        <li className={styles.navigation_item}>
          <Link href="/" className={styles.navigation_item_link}>
            Home
          </Link>
        </li>
        <li className={styles.navigation_item_categories}>
          <Link href={`/`} className={styles.navigation_item_link}>
            Categories
          </Link>
          <ul className={styles.navigation_item_categories_list}>
            {navigation.map((booktype) => (
              <li
                className={styles.navigation_item_categories_item}
                key={booktype.id}
              >
                <Link
                  href={`/collections/${booktype.title}`}
                  className={styles.navigation_item_link}
                >
                  {booktype.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.navigation_item}>
          <Link href="/about-us" className={styles.navigation_item_link}>
            About Us
          </Link>
        </li>
        {user ? (
          <>
            <li className={styles.navigation_item_user}>
              <span className={styles.navigation_item_link}>{user.name}</span>
              <ul className={styles.user_options_list}>
                <li className={styles.user_options}>
                  <Link href="/favorite-list">My List</Link>
                </li>
                <li className={styles.user_options}>
                  <span onClick={logoutButtonHandler}>Log Out</span>
                </li>
              </ul>
            </li>
          </>
        ) : (
          <li className={styles.navigation_item}>
            <Link href="/sign-in" className={styles.navigation_item_link}>
              Sign In
            </Link>
          </li>
        )}
        {user && (
          <li className={styles.navigation_item}>
            <Link href="/check-out" className={styles.navigation_item_link}>
              <SlBasket />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavigationBar;
