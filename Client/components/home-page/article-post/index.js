import styles from './article-post.module.css';
import ArticleItem from '../article-items';

function ArticlePost({ articles }) {    

    return (
        <ul className={styles.posts_container}>
            {articles && articles.map((article) => 
                <ArticleItem key={article.id} article={article}/>
            )}
        </ul>
    );
}

export default ArticlePost;

