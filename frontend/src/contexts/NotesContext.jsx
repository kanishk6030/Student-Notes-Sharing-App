import { createContext, useEffect, useState } from "react";
import axios from "../api/axios.js";
import { useNavigate } from "react-router-dom";

export const NotesContext = createContext(null);

export function NotesProvider({ children }) {
    const [notes,setNotes] = useState([]);
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

    return (
        <NotesContext.Provider value={{ notes , loading , getAllNotes }}>
          {children}
        </NotesContext.Provider>
      );
}