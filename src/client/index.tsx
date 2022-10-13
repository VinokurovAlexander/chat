import { createRoot } from "react-dom/client";
import { LoguxProvider } from "./providers";
import { App } from "./components/App";
import './index.css';

const container = document.getElementById('app');

if (container) {
    const root = createRoot(container);

    root.render(
        <LoguxProvider>
            <App />
        </LoguxProvider>
    );
}

