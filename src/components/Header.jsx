import styles from '../components/header.module.css'

const Header = () => {
    return (
        <>
        <div className={styles.header}>
        <div className={styles.header_intern}>
            <div className={styles.header_header}>
                <img src="src/assets/logo.svg" alt="" />
                <div className={styles.header_search_bar}>
                    <input className={styles.header_search} placeholder='Pesquisar produto...'></input>
                    <img className={styles.search_icon} src="src/assets/Search.svg" alt="" />
                </div>
                <div className={styles.header_login}>Cadastre-se</div>
                <button className={styles.header_button}>Entrar</button>
                <img className={styles.header_carrinho} src="src/assets/carrinho.svg" alt="" />
            </div>
            <div>
                <ul className={styles.header_footer}>
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Categorias</li>
                    <li>Meus Pedidos</li>
                </ul>    
            </div>
            </div>
            </div>
        </>
    )
}
export default Header