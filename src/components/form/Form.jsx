import FormField from '../formField/FormField';
import styles from './styles.module.css'

import img1 from './../../img/plus.svg'
import img2 from './../../img/search.svg'
import img3 from './../../img/date.svg'

const Form = ({ props, children }) => {
    return (
        <div className={styles.form}>
            <div className={styles.form__title}>
                {props.isNes ? <span>*</span> : <></>}{props.title}
            </div>
            <div className={styles.form__field}>
                <FormField props={{ isPerson: props.isPerson }}>
                    {children}
                </FormField>
                {props.isPerson ? <div className={styles.field__edit}>
                    <button className={styles.edit}>
                        <img src={img1} alt='search' />
                    </button>
                    <button className={styles.edit}>
                        <img src={img2} alt='search' />
                    </button>
                </div> : <></>}
                {props.isSearch ? <button className={styles.edit}>
                    <img src={img2} alt='search' />
                </button> : <></>}
                {props.isDate ? <button className={styles.edit}>
                    <img src={img3} alt='date' />
                </button> : <></>}
            </div>


        </div>
    );
}

export default Form; 