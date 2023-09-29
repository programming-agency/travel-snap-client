import { Link } from "react-router-dom"
import "./register.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Register({ updateUser }) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {userName, email, pass}
    console.log(user)
    try {
      const data = await axios.post("http://localhost:8908/api/register", user);
      console.log(data)
      if (data.status === 200) {
        // updateUser(data.data.user);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  }




  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit} required>
          <label>Username</label>
          <input className="registerInput" required={true} type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} placeholder="Enter your username..." />
          <label>Email</label>
          <input className="registerInput" value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter your email..." required />
          <label>Password</label>
          <input className="registerInput" required value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" placeholder="Enter your password..." />
          <button className="registerButton" class="btn bg-warning mt-3">Register</button>
        </form>
        <Link to="/login"><button className="registerLoginButton">Login</button></Link>
      </div>
    </>
  )
}