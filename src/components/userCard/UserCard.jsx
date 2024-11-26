import img from './../../img/x.svg'
import styles from './style.module.css'

const UserCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__name}>{props.name}</div>
            {props.isClosible ? <img className={styles.close} onClick={props.onDelete} src={img} alt='123' /> : <></>}
        </div>
    );
}

export default UserCard;