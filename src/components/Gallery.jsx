import styles from "../components/Gallery.module.css";

const Gallery = () => {
  return (
    <>
      <div className={styles.text}>
        <span>
          <span>Melhores Ofertas personalizadas</span>
          <h3 className={styles.gallery_titulo}>Queima de stoque Nike 🔥</h3>
          <div className={styles.gallery_text}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</div>
          <button>Ver Ofertas</button>
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
    </>
  );
};
export default Gallery;
