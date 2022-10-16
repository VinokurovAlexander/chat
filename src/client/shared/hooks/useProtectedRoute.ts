import { useNavigate } from "react-router-dom";
import {useStore} from "@nanostores/react";
import { useEffect } from "react";

import {getUser} from "../store/auth";

export default () => {
    const user = useStore(getUser);
    const navigation = useNavigate();

    useEffect(() => {
        user ? navigation('/chat') : navigation('/signin')
    }, [])
}