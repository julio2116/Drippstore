import styles from "../components/Carrossel.module.css";
import Gallery from "./Gallery";

const Gallery2 = () => {
  return (
    <>
    <div className={styles.carrossel_center}>
      <div className={styles.carrossel_box}>
        <div className={styles.carrossel_inner_box}>
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        </div>
        <div className={styles.carrossel_checkbox}>
          <input className={styles.carrossel_check} type="radio" name="slide" value={"a"} />
          <input className={styles.carrossel_check} type="radio" name="slide" value={"b"} />
          <input className={styles.carrossel_check} type="radio" name="slide" value={"c"} />
          <input className={styles.carrossel_check} type="radio" name="slide" value={"c"} />
        </div>
      </div>
      </div>
    </>
  );
};
export default Gallery2;
