import { useStore } from "@nanostores/react";

import { Chat } from "../Chat";
import { SignIn } from "../SignIn";
import { getUser } from "../../store/auth";
import { LoguxProvider } from "../../providers";
import classes from './App.module.css';

const App = () => {
    const user = useStore(getUser);

    return (
        <LoguxProvider userId={user?.id}>
            <div className={classes.app}>
                {user
                    ? <Chat className={classes.chat} user={user} />
                    : <SignIn className={classes.signin} />
                }
            </div>
        </LoguxProvider>
    )
}

export default App;