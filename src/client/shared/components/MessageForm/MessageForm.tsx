import { FC, useState, ChangeEventHandler, FormEventHandler } from 'react';
import { IconButton } from "../IconButton";
import SendIcon from './assets/send.svg';
import classes from './MessageForm.module.css';

interface MessageForm {
    onSubmit?: (value: string) => void;
}

const MessageForm: FC<MessageForm> = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault();
        setValue('');

        onSubmit?.(value);
    }

    const handleFieldChange: ChangeEventHandler<HTMLInputElement>  = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={classes.wrapper}>
                    <input placeholder="Start typing..." className={classes.input} value={value} onChange={handleFieldChange} />
                    <div className={classes.buttons}>
                        <IconButton disabled={!value} className={classes.button} icon={<SendIcon />} />
                    </div>
                </div>
            </form>
        </div>
    )
};

export default MessageForm;