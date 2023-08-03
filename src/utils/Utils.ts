import configuration from '../resources/config.json';
export class Utils {

    private constructor() {
        throw new Error("Static util class");
    }

    static getAuthConfiguration() {
        if (!configuration) {
            throw Error('The configuration file is missing please README.')
        }

        return configuration.auth;
    }
}