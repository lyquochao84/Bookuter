import styles from "./footer.module.css";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaGooglePay,
} from "react-icons/fa6";
import { SiZelle, SiApplepay } from "react-icons/si";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_wrap}>
        <ul className={styles.footer_first_column}>
          <li className={styles.footer_item}>
            <Link href={"/"} className={styles.footer_link}>
              <span className={styles.footer_text}>Home</span>
            </Link>
          </li>
          <li className={styles.footer_item}>
            <Link href={"/about-us"} className={styles.footer_link}>
              <span className={styles.footer_text}>Our Services</span>
            </Link>
          </li>
        </ul>
        <ul className={styles.footer_second_column}>
          <li className={styles.footer_item}>
            <span className={styles.footer_copyright_text}>
              Copyright © 2023 Bookuter
            </span>
          </li>
          <ul className={styles.footer_social_media}>
            <li className={styles.footer_social_media_item}>
              <Link href="/" className={styles.footer_social_media_link}>
                <BsFacebook />
              </Link>
            </li>
            <li className={styles.footer_social_media_item}>
              <Link href="/" className={styles.footer_social_media_link}>
                <BsInstagram />
              </Link>
            </li>
            <li className={styles.footer_social_media_item}>
              <Link href="/" className={styles.footer_social_media_link}>
                <TfiEmail />
              </Link>
            </li>
          </ul>
          <ul className={styles.footer_payment}>
            <li className={styles.footer_social_media_item}>
              <FaCcVisa />
            </li>
            <li className={styles.footer_social_media_item}>
              <FaCcMastercard />
            </li>
            <li className={styles.footer_social_media_item}>
              <FaCcAmex />
            </li>
            <li className={styles.footer_social_media_item}>
              <FaCcDiscover />
            </li>
            <li className={styles.footer_social_media_item}>
              <SiApplepay />
            </li>
            <li className={styles.footer_social_media_item}>
              <FaGooglePay />
            </li>
            <li className={styles.footer_social_media_item}>
              <SiZelle />
            </li>
          </ul>
        </ul>
        <ul className={styles.footer_third_column}>
          <li className={styles.footer_item}>
            <Link href={"/privacy"} className={styles.footer_link}>
              <span className={styles.footer_text}>Privacy</span>
            </Link>
          </li>
          <li className={styles.footer_item}>
            <Link href={"/contact"} className={styles.footer_link}>
              <span className={styles.footer_text}>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
