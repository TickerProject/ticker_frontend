import {Authorization} from "../api/Authorization";
import {AuthorizationAuth0} from "./AuthorizationAuth0";

export class AuthorizationFactory {

    private static instance: Authorization;

    static getInstance() : Authorization {
        if (!this.instance) {
            this.instance = new AuthorizationAuth0(); // TODO
        }

        return this.instance;
    }
}

export const auth: Authorization = AuthorizationFactory.getInstance();