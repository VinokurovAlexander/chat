import { Chat } from "../Chat";
import classes from './App.module.css';

const App = () => (
    <div className={classes.app}>
        <Chat className={classes.chat} />
    </div>
)

export default App;