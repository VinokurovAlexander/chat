import { useStore } from "@nanostores/react";

import { Chat } from "../Chat";
import { SignIn } from "../SignIn";
import { getUser } from "../../store/auth";
import { LoguxProvider } from "../../providers";
import classes from './App.module.css';

const App = () => {
    const user = useStore(getUser);

    return (
        <div className={classes.app}>
            {user
                ? (
                    <LoguxProvider userId={user.id}>
                        <Chat className={classes.chat} user={user} />
                    </LoguxProvider>
                )
                : <SignIn className={classes.signin} />
            }
        </div>
    )
}

export default App;