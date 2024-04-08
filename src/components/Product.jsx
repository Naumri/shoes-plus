import styles from "./Product.module.css";
import ProductImg from "../assets/product.jpg";

function Product () {
    return (
        <section className={styles.product}>
            <div className={styles.container}>
                <img className={styles.productImg} src={ProductImg} alt="Tênis" draggable="false" />
                <div className={styles.info_product}>
                    <div className={styles.product_title}>
                        <span className={styles.hat}>NOVO MODELO</span>
                        <div className={styles.line}></div>
                        <h2 className={styles.product_name}>TÊNIS ESPORTIVO</h2>
                    </div>
                    <p className={styles.description}>Novo tênis esportivo altamente tecnológico, com o maior conforto que se pode proporcionar. Fortemente recomendo por especialistas no desenvolvimento de tênis esportivos!</p>
                    <div className={styles.buttons}>
                        <a className={styles.checkout} href="#">Ver produto</a>
                        <a className={styles.purchase} href="#">COMPRE JÁ!</a>
                    </div>
                    <span className={styles.detail}>Disponível em todas as lojas físicas</span>
                </div>
            </div>
        </section>
    )
}

export default Product;