import { Chat } from "../../shared/components/Chat";
import { User } from "../../shared/store/auth";

import classes from './MainPage.module.css';

interface MainPage {
    user: User
}

export default ({ user }: MainPage) => (
    <div className={classes.main}>
        <Chat user={user} className={classes.chat} />
    </div>
);