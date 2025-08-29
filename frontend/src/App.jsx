import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./layouts/Layout";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Students from "./components/Students/Students";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested routes render inside <Outlet /> */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="explore" element={<Explore />} />
        <Route path="students" element={<Students />} />
        <Route path="profile" element={<Profile />} />
        {/* Add more protected/nested routes here */}
      </Route>
    </Routes>
  );
}
export default App;