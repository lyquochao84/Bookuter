import styles from './add-cart-button.module.css';

function AddToCartBtn({ addCartHandler }) {
    return (
        <div className={styles.add_cart_btn_wrap}>
            <button className={styles.add_cart_btn} onClick={addCartHandler}>ADD TO CART</button>
        </div>
    );
}

export default AddToCartBtn;