import { FC, PropsWithChildren } from "react";

import WarnIcon from './assets/warn.svg';
import classes from './Alert.module.css';

const Alert:FC<PropsWithChildren> = ({ children }) => (
    <div className={classes.container}>
        <WarnIcon className={classes.icon} />
        {children}
    </div>
)

export default Alert;