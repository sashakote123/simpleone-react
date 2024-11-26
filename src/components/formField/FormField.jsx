import { Children, useState } from 'react';
import styles from './style.module.css'

const FormField = ({ props, children }) => {

    const [text, setText] = useState(children)

    const changeText = (e) => {
        setText(e.target.value)
    }

    return (
        props.isPerson ? <div className={styles.form__container}>
            {children}
        </div> : <input type="text" className={styles.form__container} value={text} onChange={changeText} />


    );
}

export default FormField;