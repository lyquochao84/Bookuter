import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "@/context/userContext";
import styles from './favorite-list.module.css';
import FavoriteListItem from "@/components/favorite-list-item";

function FavoriteList() {
  const { user, setUser } = useContext(AuthUserContext);
  const [items, setItems] = useState([]);

  // Only authenticated user can access to this page
  useEffect(() => {
    if (!user) {
      fetch("http://localhost:3001/users/favorite-list", {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setItems(data.favoriteBooks || []);
        })
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, [user, setUser]);

  return (
    <ul className={styles.favorite_list_wrap}>
      {items.map((book) => (
        <FavoriteListItem book={book} />
      ))}
    </ul>
  );
}

export default FavoriteList;
