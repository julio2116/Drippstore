import styles from "../components/Gallery.module.css";

const Gallery = () => {
  return (
    <>
      <div className={styles.gallery_box}>
        <div className={styles.gallery_header}>
          <span className={styles.gallery_text}>
            <span className={styles.gallery_subtitulo}>Melhores Ofertas personalizadas</span>
            <h3 className={styles.gallery_titulo}>Queima de stoque Nike🔥</h3>
            <div className={styles.gallery_description}>
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </div>
            <button className={styles.gallery_button}>Ver Ofertas</button>
          </span>
          <span className={styles.gallery_images}>
            <img
              className={styles.gallery_sapato}
              src="src/assets/sapato-slide-header.svg"
              alt=""
            />
            <img
              className={styles.gallery_ornament}
              src="src/assets/Ornament.svg"
              alt=""
            />
          </span>
        </div>
        <div className={styles.gallery_checkbox}>
          <input type="radio" checked name="slide" value={"a"} />
          <input type="radio" name="slide" value={"b"} />
          <input type="radio" name="slide" value={"c"} />
          <input type="radio" name="slide" value={"c"} />
        </div>
      </div>
    </>
  );
};
export default Gallery;
