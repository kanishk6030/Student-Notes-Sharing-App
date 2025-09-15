import { createContext, useEffect, useState } from "react";
import axios from "../api/axios.js";
import { useNavigate } from "react-router-dom";

export const NotesContext = createContext(null);

export function NotesProvider({ children }) {
    const [notes,setNotes] = useState([]);
    const [userNotes,setUserNotes] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    async function getAllNotes() {
    setLoading(true); // start loading before fetching
    try {
        const res = await axios.get("/notes");
        console.log("Notes", res.data);
        setNotes(res.data.allNotes);
    } catch (err) {
        console.error("Error fetching notes:", err);
    } finally {
        setLoading(false); // stop loading after success/fail
    }
  }

  async function getUserNotes(userId) {
    setLoading(true);
    try {
      const res = await axios.get(`/notes/search/user?userId=${userId}`);
      console.log("User Notes", res.data);
      setUserNotes(res.data.userNotes);
    } catch (err) {
      console.error("Error fetching user notes:", err);
    } finally {
      setLoading(false);
    }
  }

    return (
        <NotesContext.Provider value={{ notes , userNotes, loading , getAllNotes , getUserNotes }}>
          {children}
        </NotesContext.Provider>
      );
}