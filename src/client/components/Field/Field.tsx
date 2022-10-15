import { FC, ChangeEventHandler } from "react";
import classes from './Field.module.css';

interface Field {
    label: string;
    name: string;
    id: string;
    type?: 'text' | 'password'
    required?: boolean;
    onChange?: (value: string) => void;
}

const Field: FC<Field> = ({ label, required = false, name, id, type = 'text', onChange }) => {
    const handleChange:ChangeEventHandler<HTMLInputElement> = e => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classes.field}>
            <label htmlFor={id} className={classes.label}>
                {label}
                {required && <span className={classes.required}> *</span>}
            </label>
            <input required={required} id={id} name={name} type={type} className={classes.input} onChange={handleChange} />
        </div>
    )
}

export default Field;