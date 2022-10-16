import { LoguxProvider, RouterProvider } from "../providers";

const App = () => (
    <LoguxProvider>
        <RouterProvider />
    </LoguxProvider>
)

export default App;