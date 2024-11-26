import styles from "../components/Carrossel.module.css";
import Gallery from "./Gallery";

const Gallery2 = () => {
  return (
    <>
      <div className={styles.carrossel_box}>
        <div className={styles.carrossel_inner_box}>
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        </div>
      </div>
    </>
  );
};
export default Gallery2;
