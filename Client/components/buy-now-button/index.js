import styles from "./buy-now-button.module.css";

function BuyNowBtn({ buyNowHandler }) {
  return (
    <div className={styles.buy_now_btn_wrap}>
      <button className={styles.buy_now_btn} onClick={buyNowHandler}>
        BUY NOW
      </button>
    </div>
  );
}

export default BuyNowBtn;
