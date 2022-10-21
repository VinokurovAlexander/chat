import {Button} from "../Button";

import classes from './Notice.module.css';

interface Notice {
    title: string;
    description: string[];
    button: {
        title: string;
        href?: string;
        onClick?: () => void;
    }
}

export default ({ title, description, button }: Notice) => (
    <div className={classes.main}>
        <h1 className={classes.title}>{title}</h1>
        {description.map((text, index) => <p key={`${index}_${text}`}>{text}</p>)}
        <Button onClick={button.onClick} className={classes.button}>
            {button.title}
        </Button>
    </div>
)