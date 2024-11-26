import { useState } from 'react';
import styles from './styles.module.scss'
import ModalWindow from '../modalWindow/ModalWindow';


const ButtonsBlock = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className={styles.container}>
            <div className={styles.form__buttons}>
                <div className={styles.buttons__left}>
                    <div className={styles.left__title}>Подзадача</div>
                    <button onClick={openModal} className={styles.left__button}>Создать</button>
                </div>
                <div className={styles.buttons__right}>
                    <button className={styles['right__button-primary']}>Сохранить</button>
                    <button className={styles['right__button']}>Сохранить и выйти</button>
                </div>
            </div>
            <ModalWindow isopen={isModalOpen} onClose={closeModal} />
        </div>

    );
}

export default ButtonsBlock;