import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handelButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being both`);
  };
  return (
    //css modules
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handelButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
