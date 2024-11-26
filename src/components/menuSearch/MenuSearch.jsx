import styles from './styles.module.css'
import img from './../../img/unpin.svg'
import img2 from './../../img/filter.svg'
const MenuSearch = () => {
    return (
        <div className={styles.search}>
            <div className={styles.search__input}>
                <input placeholder='Поиск по меню' type="text" className={styles.input__input} />
                <img src={img2} alt="123" />
            </div>
            <div className={styles.input__unpin}>
                <img src={img} alt="1213" />
            </div>
        </div>
    );
}

export default MenuSearch;