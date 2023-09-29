import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Destination from "./pages/destination/Destination";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from "./components/landingpage/Landingpage";
import Logout from "./pages/logout/Logout";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import "../src/global.css"



import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



function App() {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:8908";
  },[])
  return (
    
    <BrowserRouter>
    
    <Topbar user={user} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/login"
          element={<Login updateUser={updateUser} />}
        />
        <Route
          path="/register"
          element={<Register updateUser={updateUser} />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/single" element={<Single />} />
        <Route path="/write" element={<Write />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/payment" element={<PaymentPage />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;