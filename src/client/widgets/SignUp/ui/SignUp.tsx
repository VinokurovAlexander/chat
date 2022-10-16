import { AuthForm } from "../../../shared/components/AuthForm";
import { Route } from "../../../shared/config/routes";

export default () => (
    <div>
        <AuthForm
            error={null}
            title="Sign Up"
            navLink={{ title: 'Already have an account? Sign in', to: Route.SIGN_IN }}
        />
    </div>
)