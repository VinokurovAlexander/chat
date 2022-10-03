import { FC, useState } from 'react';
import { Button } from "../Button";
import SendIcon from './assets/send.svg';
import classes from './Field.module.css';

interface Field {
    onSubmit?: (value: string) => void;
}

const Field: FC<Field> = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setValue('');

        onSubmit?.(value);
    }

    const handleFieldChange = e => {
        setValue(e.target.value)
    }

    return (
        <div className={classes.field}>
            <form onSubmit={handleSubmit}>
                <div className={classes.wrapper}>
                    <input placeholder="Start typing..." className={classes.input} value={value} onChange={handleFieldChange} />
                    <div className={classes.buttons}>
                        <Button disabled={!value} className={classes.button} icon={<SendIcon />} />
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Field;