import styles from './articles-content.module.css';

function ArticleContent({ article_name, description }) {
    return (
        <div className={styles.article_content}>
            <h3 className={styles.article_content_title}>{article_name}</h3>
            <p className={styles.article_content_description}>{description}</p>
        </div>
    );
}

export default ArticleContent;