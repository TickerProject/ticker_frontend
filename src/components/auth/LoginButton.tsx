import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

//TODO abstraction
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button className="form-control-lg" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;