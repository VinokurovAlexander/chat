import { useStore } from "@nanostores/react";

import { Chat } from "../Chat";
import { SignIn } from "../SignIn";
import { getUserId } from "../../store/auth";
import { LoguxProvider } from "../../providers";
import classes from './App.module.css';

const App = () => {
    const id = useStore(getUserId);

    return (
        <div className={classes.app}>
            {id
                ? <LoguxProvider userId={id}><Chat className={classes.chat} /></LoguxProvider>
                : <SignIn className={classes.signin} />
            }
        </div>
    )
}

export default App;