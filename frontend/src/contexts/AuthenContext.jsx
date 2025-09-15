// src/contexts/AuthContext.jsx
import { createContext, useDeferredValue, useEffect, useState } from "react";
import axios from "../api/axios.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");

  async function login(email, password) {
    const res = await axios.post("/auth/login", { email, password });
    setUser(res.data.user);
    setToken(res.data.token);
    localStorage.setItem("authToken", res.data.token);
    navigate("/")
  }

  async function register(username, email, password) {
    await axios.post("/auth/signup", { username, email, password });
    // Optionally auto-login or use login(email, password)
    login(email,password);
  }

  function logout() {
    setUser(null);
    setToken("");
    localStorage.removeItem("authToken");
    navigate("/")
  }

  //Restore the login token after the refresh
  useEffect(()=>{
    const token = localStorage.getItem("authToken");
    if(token){
      axios.get("/me",{
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
         console.log("Restored user:", res.data); // ✅ Check if this logs after refresh
      setUser(res.data);
      })
      .catch(()=>{
        localStorage.removeItem("authToken")
      })
      .finally(()=>setLoading(false))
    }else {
      setLoading(false);
    }
  },[])

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register,loading }}>
      {children}
    </AuthContext.Provider>
  );
}

