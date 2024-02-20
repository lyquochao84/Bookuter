import ArticleContent from "@/components/articles";
import styles from "./articles.module.css";
import Image from "next/image";

function ArticlesDetail({ articleDetail }) {
  const { id, article_name, image_name, description } = articleDetail;
  const imagePath = `/img/articles/${image_name}.jpg`;

  return (
    <div className={styles.article_detail}>
      <Image src={imagePath} width={0} height={0} alt={article_name} layout="responsive" className={styles.article_img}/>
      <ArticleContent id={id} article_name={article_name} description={description} />
    </div>
  );
}

export default ArticlesDetail;

export async function getStaticProps(context) {
  const { params } = context;

  try {
    const articleId = params.id;

    const data = await fetch("http://localhost:3001/articles");
    const articleData = await data.json();

    const articleDetail = articleData.find(
      (article) => article.id == articleId
    );

    return {
      props: {
        articleDetail: articleDetail,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const data = await fetch("http://localhost:3001/articles");
  const articleData = await data.json();

  const ids = articleData.map((article) => article.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
