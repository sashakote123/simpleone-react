import { useRef } from 'react';
import LeftBar from '../leftBar/LeftBar';
import MenuSearch from '../menuSearch/MenuSearch';
import styles from './styles.module.scss'

const LeftMenu = () => {

    const list = ['Моя работа', 'Структура портала', 'Личное расписание', 'Отсутствие на рабочем месте', 'Портфель услуг',
        'Дашборды', 'Доски задач', 'Обращения', 'События', 'Инциденты', 'Проблемы', 'Настройка каталогов',
        'Запросы на обслуживание', 'Запросы на изменение', 'Управление конфигурациями', 'Управление уровнем услуг', 'Настройка соответствий'
    ]

    const ref = useRef()

    const handleClick = () => {
        ref.current.classList.toggle('none')
    }

    return (
        <section className={styles.menu}>
            <div style={{ display: 'flex' }}>
                <LeftBar handler={handleClick} />
                <div ref={ref}>
                    <MenuSearch />
                    <ul className={styles.menubar__list}>
                        {list.map((item, index) => {
                            return (
                                <li key={index} className={styles.list__item}>
                                    <details name='123' className={styles.custom}>
                                        <summary className={styles.item__title}>{item}</summary>
                                        <p className={styles.item__content}>{item}</p>
                                    </details>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </section>

    );
}

export default LeftMenu;