import { useStore } from "@nanostores/react";

import { useProtectedRoute } from "../../shared/hooks";
import {Chat} from "../../shared/components/Chat";
import {getUser} from "../../shared/store/auth";

import classes from './ChatPage.module.css';


export default () => {
    useProtectedRoute();
    const user = useStore(getUser);

    return (
        <div className={classes.main}>
            {/* fix me */}
            <Chat user={user} className={classes.chat} />
        </div>
    )
}
