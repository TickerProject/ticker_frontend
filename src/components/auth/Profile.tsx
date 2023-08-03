import {Auth0ContextInterface, useAuth0, User} from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
    const auth: Auth0ContextInterface = useAuth0();

    if (auth.isLoading) {
        return <div>Loading ...</div>;
    }
    const user: User | undefined = auth.user
    return (
        user && auth.isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
};

export default Profile;