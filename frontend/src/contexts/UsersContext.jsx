import { createContext, useDeferredValue, useEffect, useState } from "react";
import axios from "../api/axios.js";

export const UsersContext = createContext(null);

export function UsersProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

   async function getAllUsers() {
    setLoading(true); // start loading before fetching
    try {
        const res = await axios.get("/users");
        console.log("users", res.data.response.users);
        setUsers(res.data.response.users);
    } catch (err) {
        console.error("Error fetching notes:", err);
    } finally {
        setLoading(false); // stop loading after success/fail
    }
   }

    return (
        <UsersContext.Provider value={{ users, loading ,getAllUsers}}>
            {children}
        </UsersContext.Provider>
    );
}
