import ButtonsBlock from '../buttonsBlock/ButtonsBlock';
import Form from '../form/Form';
import UserCard from '../userCard/UserCard';
import styles from './styles.module.scss'

const CreatePostPage = () => {
    return (

        <div className={styles.form}>
            <ButtonsBlock />
            <div className={styles.form__title}>STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller</div>
            <div className={styles.form__container}>
                <Form props={{ title: 'Тема', isNes: true, isEditable: false }}>
                    На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента
                </Form>
                <Form props={{ title: 'Статус', isNes: false, isEditable: false }}>
                    Новая
                </Form>
                <Form props={{ title: 'Описание', isNes: false, isEditable: false }}>

                </Form>
                <Form props={{ title: 'Продукт', isNes: false, isEditable: true, isSearch: true }}>
                    Paltform
                </Form>
                <Form props={{ title: 'Рабочие заметки', isNes: true, isEditable: false }}>
                    Проверить ACL id=172830402014193655
                </Form>
                <Form props={{ title: 'Приоритет', isNes: true, isEditable: true }}>
                    Средний
                </Form>
                <Form props={{ title: 'Ответственный', isNes: false, isEditable: true, isPerson: true }}>
                    <UserCard name='Константин Константинопольский' isClosible={false} />
                </Form>

                <Form props={{ title: 'Группа', isNes: false, isEditable: true, isPerson: true }}>
                    <UserCard name='Support Group' isClosible={false} />
                </Form>
            </div>
            <Form props={{ title: 'Согласующие', isNes: false, isEditable: true, isPerson: true }}>
                <UserCard name='Андрей Пивоваров' isClosible={true} />
                <UserCard name='Максим Галактионов' isClosible={true} />
                <UserCard name='Алла Лин' isClosible={true} />
                <UserCard name='Константин Константинопольский Константинович' isClosible={true} />
                <UserCard name='Игорь Иванченко' isClosible={true} />
                <UserCard name='Юлия Эйчаровна' isClosible={true} />
                <UserCard name='Артём Подпрыгайко-Саппортов' isClosible={true} />
                <UserCard name='Илья Вазнец' isClosible={true} />
            </Form>
            <div className={styles.form__container}>
                <Form props={{ title: 'Когда открыто', isNes: false, isEditable: false, isDate: true }}>
                    22.10.2024
                </Form>
                <Form props={{ title: 'Когда создано', isNes: false, isEditable: false, isDate: true }}>
                    22.10.2024
                </Form>
                <Form props={{ title: 'Кем открыто', isNes: false, isEditable: true, isPerson: true }}>
                    <UserCard name='Андрей Пивоваров' isClosible={true} />
                </Form>
                <Form props={{ title: 'Кем создано', isNes: false, isEditable: true, isPerson: true }}>
                    <UserCard name='Андрей Пивоваров' isClosible={true} />
                </Form>

            </div>
        </div >

    );
}

export default CreatePostPage;