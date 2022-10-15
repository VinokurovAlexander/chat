import { useStore } from "@nanostores/react";

import { Chat } from "../Chat";
import { SignIn } from "../SignIn";
import { userStore } from "../../store/user";
import classes from './App.module.css';

const App = () => {
    const user = useStore(userStore);

    return (
        <div className={classes.app}>
            {user.isAuth ? <Chat className={classes.chat} /> : <SignIn className={classes.signin} />}
        </div>
    )
}

export default App;