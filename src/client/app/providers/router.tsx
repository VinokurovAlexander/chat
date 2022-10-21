import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Route} from "../../shared/config/routes";
import { ProtectedRoute } from "../../shared/components/ProtectedRoute";
import {MainPage} from "../../pages/MainPage";
import {SignUpPage} from "../../pages/SignUpPage";
import {SignInPage} from "../../pages/SignInPage";
import {WarnPage} from "../../pages/WarnPage";
import {VerifyPage} from "../../pages/VerifyPage";


const router = createBrowserRouter([
    {
        path: Route.MAIN,
        element: <ProtectedRoute needVerification render={MainPage} />
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
        path: Route.WARN,
        element: <ProtectedRoute render={WarnPage} />
    },
    {
        path: Route.VERIFY,
        element: <ProtectedRoute render={VerifyPage} />
    }
]);

export default () => <RouterProvider router={router} />