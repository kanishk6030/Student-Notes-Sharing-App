import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Students from "./pages/Students/Students";
import Profile from "./pages/Profile/Profile";
import Pyqs from "./pages/Pyqs/Pyqs";
import PyqsResults from "./pages/Pyqs/PyqsResults";
import UploadNotes from "./pages/Notes/UploadNotes";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested routes render inside <Outlet /> */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="explore" element={<Explore />} />
        <Route path="pyqs" element={<Pyqs />} />
        <Route path="profile" element={<Profile />} /><Route path="/notes/upload" element={<UploadNotes />} />
        <Route path="/pyqs/:branch/:year" element={<PyqsResults />} />
        {/* Add more protected/nested routes here */}
      </Route>
    </Routes>
  );
}
export default App;