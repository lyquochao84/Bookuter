import { Fragment } from "react";
import styles from "../styles/layout/layout.module.css";
import Footer from "./footer/footer";
import NavigationBar from "./navigation/navigation";

function Layout(props) {
  return (
    <Fragment>
      <div className={styles.wrap}>
        <NavigationBar />
        <main className={styles.content}>{props.children}</main>
      </div>
      <Fragment>
        <Footer />
      </Fragment>
    </Fragment>
  );
}

export default Layout;
