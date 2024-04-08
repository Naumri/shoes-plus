import { useState, useEffect } from "react";
import styles from "./Promotion.module.css";

function Promotion () {
    const [promo, setPromo] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPromo(prevPromo => !prevPromo);
        }, 5000);

        // Limpar o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <div className={styles.promotion}>
            { promo ? (
                <span className={!promo && "hide"}><strong>FRETES GRÁTIS</strong> NA PRIMEIRA COMPRA!</span>
            ) : (
                <span className={promo && "hide"}><strong>DESCONTO DE 5%</strong> POR ITEM NO CARRINHO</span>
            )}
        </div>
    )
}

export default Promotion;