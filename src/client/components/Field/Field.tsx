import { FC } from "react";
import classes from './Field.module.css';

interface Field {
    label: string;
    name: string;
    id: string;
    type?: 'text' | 'password'
    required?: boolean;
}

const Field: FC<Field> = ({ label, required = false, name, id, type = 'text' }) => (
    <div className={classes.field}>
        <label htmlFor={id} className={classes.label}>
            {label}
            {required && <span className={classes.required}> *</span>}
        </label>
        <input required={required} id={id} name={name} type={type} className={classes.input}/>
    </div>
)

export default Field;