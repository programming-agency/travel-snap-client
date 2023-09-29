import "./login.css";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";


export default function Login({ updateUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, pass }
    console.log(user)
    try {
      const data = await axios.post("http://localhost:8908/api/login", { email, pass });
      console.log(data)
      if (data.status === 200) {
        // alert(data.data.msg);
        // updateUser(data.data.user);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        navigate("/Homepage");
      }

      
    } catch (error) {
      console.log(error?.response?.data?.msg)
      // alert(error.msg);
      setError(error?.response?.data?.msg || 'someting went wrong');
    }
  }

  return (
    <>

      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input className="loginInput" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email..." />
          <label>Password</label>
          <input className="loginInput" type="password" value={pass} onChange={(e) => { setPass(e.target.value) }} placeholder="Enter your password..." />
          <button className="loginButton" class="btn bg-warning mt-3" type={"submit"}>Login</button>
          {
            error&&<div style={{backgroundColor: '#ff2222', textAlign: 'center', marginTop: '22px', color: 'white', padding: '8px', borderRadius: '6px'}}>{error}</div>
          }
        </form>
        <Link to="/register"> <button className="loginRegisterButton">Register</button></Link>

      </div>
    </>

  );
}