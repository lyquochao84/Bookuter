import Image from "next/image";
import styles from "./navigation.module.css";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";

const navigation = [
  { title: 'Fiction'},
  { title: 'Non-Fiction'},
  { title: 'Science'},
  { title: 'History'},
  { title: 'Horror'},
]

function NavigationBar(props) {
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
      <input className={styles.search_bar} type="text" placeholder="Search" />
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
              <li className={styles.navigation_item_categories_item}>
                <Link href={`/collections/${booktype.title}`} className={styles.navigation_item_link}>{booktype.title}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.navigation_item}>
          <Link href="/about-us" className={styles.navigation_item_link}>
            About Us
          </Link>
        </li>
        <li className={styles.navigation_item}>
          <Link href="/sign-in" className={styles.navigation_item_link}>
            Sign In
          </Link>
        </li>
        <li className={styles.navigation_item}>
          <Link href="/" className={styles.navigation_item_link}>
            <SlBasket />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
