import {Authorization} from "../api/Authorization";
import {Auth0ContextInterface, useAuth0} from "@auth0/auth0-react";


export class AuthorizationAuth0 implements Authorization{
    isAuthenticated(): boolean {
        const auth: Auth0ContextInterface = useAuth0();

        return auth.isAuthenticated;
    }

}