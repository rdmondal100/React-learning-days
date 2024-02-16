import styles from "./Items.module.css";

// eslint-disable-next-line react/prop-types
const Items = ({ rd, bought,handleBuyNowBtn }) => {
  // const handleBuyBtnClicked =(event)=>{
  //   console.log(event);
  //   console.log(`${rd} is bought`)
  // }
  // let {rd}=props;


  return (
    <li className={` list-group-item ${bought?"active":" "}`} id={styles["css-item"]}>
      {rd}
      <button
        className={`${styles["buy-now"]} btn btn-success`}
        onClick={handleBuyNowBtn}
      >
        Buy Now
      </button>
    </li>
  );
};

export default Items;
