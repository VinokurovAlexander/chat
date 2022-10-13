import { Chat } from "../Chat";
import { SignIn } from "../SignIn";
import classes from './App.module.css';

const IS_AUTH = false;

const App = () => {
    return (
        <div className={classes.app}>
            {IS_AUTH ? <Chat className={classes.chat} /> :  <SignIn className={classes.signin} />}
        </div>
    )
}

export default App;