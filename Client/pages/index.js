import HomePageContent from "@/components/home-page";
import { Fragment, useState, useEffect } from "react";

function Homepage(props) {
  const [articles, setArticles] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/articles')
      .then(res => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(true);
      })
  }, [])

  if (!isLoading) return <p>Loading...</p>
  if (!articles) return <p>No articles data</p>

  return (
    <Fragment>
      <HomePageContent books={props.books} articles={articles}/>
    </Fragment>
  );
}

export async function getStaticProps() {
  const resFeaturedBooks = await fetch('http://localhost:3001/books/featuredBooks');
  const featuredBooks = await resFeaturedBooks.json();

  return {
    props: {
      books: featuredBooks,
    }
  };
}

export default Homepage;
