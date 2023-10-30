import NavigationBar from "@/components/layout/navigation";
import HomePageContent from "@/components/home-page";
import styles from "../styles/home-page/homepage.module.css";

function Homepage(props) {
  return (
    <div className={styles.wrap}>
      <NavigationBar/>
      <main className={styles.content}>
        <HomePageContent books={props.books}/>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const resFeaturedBooks = await fetch('http://localhost:3001/featuredBooks');
  const featuredBooks = await resFeaturedBooks.json();

  return {
    props: {
      books: featuredBooks
    }
  };
}

export default Homepage;
