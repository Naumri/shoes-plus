import styles from "./Header.module.css";
import searchImg from "../assets/search.svg";
import favoriteImg from "../assets/favorite.svg";
import cartImg from "../assets/cart.svg";
import userImg from "../assets/user.svg";
import menuImg from "../assets/menu.svg";

function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>SHOES+</h1>
                <nav className={styles.navbar_desktop}>
                    <ul className={styles.navbar}>
                        <li><a className={styles.emphasis} href="#">MULHERES</a></li>
                        <li><a className={styles.emphasis} href="#">HOMENS</a></li>
                        <li><a href="#">INFANTIL</a></li>
                        <li><a href="#">ESPORTES</a></li>
                        <li><a className={styles.emphasis} href="#">OFERTAS</a></li>
                    </ul>
                </nav>
                <nav className={styles.navbar_user}>
                    <div className={styles.search_wrapper}>
                        <input className={styles.search} type="text" placeholder="Procurar" />
                        <img className={styles.searchImg} src={searchImg} alt="Procurar" />
                    </div>
                    <div className={`${styles.searchImg} ${styles.search_mobile}`}><img src={searchImg} alt="Procurar" /></div>
                    <a className={styles.favorite} href="#"><img src={favoriteImg} alt="Favoritar" /></a>
                    <a className={styles.cart} href="#"><img src={cartImg} alt="Carrinho" /></a>
                    <a className={styles.user} href="#"><img src={userImg} alt="Usuário" /></a>
                    <div className={styles.menu}><img src={menuImg} alt="Menu" /></div>
                </nav>
            </div>
        </header>
    )
}

export default Header;