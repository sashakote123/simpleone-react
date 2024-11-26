import styles from './styles.module.scss'
import img1 from './../../img/Logo.svg'
import img2 from './../../img/search2.svg'
import img3 from './../../img/ava.png'
import img4 from './../../img/settings.svg'

const NavBar = () => {
    return (
        <nav className={styles.nav__container}>
            <img className={styles.nav__logo} src={img1} alt="123" />
            <div className={styles.nav__menu}>
                <div className={styles.menu__search}>
                    <input placeholder='Поиск' type="text" className={styles.search__input} />
                    <img className={styles.search__button} src={img2} alt="133" />
                </div>
                <div className={styles.menu__social}>
                    <img className={styles.social__avatar} src={img3} alt="ava" />
                    <div className={styles.social__name}>Максим Галактионов</div>
                    <button className={styles.social__settings}>
                        <img src={img4} alt="sett" />
                    </button>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;