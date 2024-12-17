import { useState } from "react";
import UserContext from "./UserContext";

export default function UserProvider({ children }) {
    const [currentUser,setUser] = useState(null);

    const LogOut = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{currentUser, setUser, LogOut}}>
            {children}
        </UserContext.Provider>
    )
}