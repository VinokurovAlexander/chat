import { Notice } from "../../../shared/components/Notice";
import {ProtectedChild} from "../../../shared/components/ProtectedRoute";

import classes from './WarnPage.module.css';

export default ({ user }: ProtectedChild) => (
    <div className={classes.content}>
        <Notice
            title="Thank you!"
            description={[
                `Hi ${user.name}! Use the link in your mailbox to verify account and start enjoying!`,
                'If the email has been lost, use the link below to send another one'
            ]}
            button={{
                title: 'Send verifying link'
            }}
        />
    </div>
)

