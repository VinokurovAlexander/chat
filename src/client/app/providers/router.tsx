import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {MainPage} from "../../pages/MainPage";
import {SignUpPage} from "../../pages/SignUpPage";
import {SignInPage} from "../../pages/SignInPage";
import {ChatPage} from "../../pages/ChatPage";
import {Route} from "../../shared/config/routes";


const router = createBrowserRouter([
    {
        path: Route.MAIN,
        element: <MainPage />
    },
    {
        path: Route.SIGN_UP,
        element: <SignUpPage />
    },
    {
        path: Route.SIGN_IN,
        element: <SignInPage />
    },
    {
        path: Route.CHAT,
        element: <ChatPage />
    }
]);

export default () => <RouterProvider router={router} />