import styles from './style.module.scss'

import img1 from './../../img/sidebar.svg'
import img2 from './../../img/star.svg'


const LeftBar = (props) => {
    return (
        <nav className={styles.menuBar}>
            <img className={styles.menuItem} onClick={props.handler} src={img1} alt="bar" />
            <img className={styles.menuStar} src={img2} alt="star" />
        </nav>
    );
}

export default LeftBar;
