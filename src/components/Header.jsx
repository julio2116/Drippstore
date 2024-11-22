import styles from '../components/header.module.css'

const Header = () => {
    return (
        <>
        <div className={styles.header}>
            <div className={styles.header_header}>
                <img src="src/assets/logo.svg" alt="" />
                <div className={styles.header_search_bar}>
                    <span>Pesquisar produto...</span>
                    <img className={styles.search_icon} src="src/assets/Search.svg" alt="" />
                </div>
                <div className={styles.header_login}>Cadastre-se</div>
                <button className={styles.header_button}>Entrar</button>
                <img className={styles.header_carrinho} src="src/assets/carrinho.svg" alt="" />
            </div>
            <ul className={styles.header_footer}>
                <li>Home</li>
                <li>Produtos</li>
                <li>Categorias</li>
                <li>Meus Pedidos</li>
            </ul>
            </div>
        </>
    )
}
export default Header