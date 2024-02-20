import Link from "next/link";
import Image from "next/image";
import styles from './article-items.module.css';

function ArticleItem({ article }) {
    const { id, image_name, article_name, short_description } = article;

    const imagePath = `/img/articles/${image_name}.jpg`;
    const linkPath = `/articles/${id}`;

    return (
        <li className={styles.post_item}>
            <Link href={linkPath} className={styles.post_link}>
                <div className={styles.post_image_wrap}>
                    <Image 
                        src={imagePath}
                        alt={article_name}
                        width={400}
                        height={400}
                        layout="responsive"
                    />
                </div>
            </Link>
            <div>
                <h2 className={styles.post_article_name}>{article_name}</h2>
                <p className={styles.post_short_description}>{short_description}</p>
            </div>
        </li>
    );
}

export default ArticleItem;