import Link from "next/link";
import Image from "next/image";
import styles from "./collections-grid.module.css";

const collections = [
  { id: 1, title: 'Fiction'},
  { id: 2, title: 'Non-Fiction'},
  { id: 3, title: 'Science'},
  { id: 4, title: 'History'},
  { id: 5, title: 'Horror'},
  { id: 6, title: 'Business'},
  { id: 7, title: 'Literature'},
  { id: 8, title: 'Mystery'},
  { id: 9, title: 'Romance'},
];

function CollectionGrid() {
  return (
    <ul className={styles.collections_grid}>
      {collections.map((type) => (
        <li key={type.id} className={styles.collections_grid_item}>
          <Link
            href={`collections/${type.title}`}
            className={styles.collections_grid_item_link}
          >
            <Image
              alt={type.title}
              src={`/img/collection-list/${type.title}/${type.title}.jpg`}
              width={300}
              height={300}
              className={styles.collections_grid_item_image}
            />
            <h3 className={styles.collections_grid_item_title}>{type.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CollectionGrid;
