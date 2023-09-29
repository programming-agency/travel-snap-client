import { Link, useLocation, useNavigate } from "react-router-dom";
import "./topbar.css";
import { useEffect, useState } from "react";
// import axios from "axios"

export default function Topbar({ user }) {
  const [userDetails, setUserDetails] = useState(null)

  const loggedIn = user !== null;

  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async() => {
      const user = await localStorage.getItem('user')

      if(!user) return location.pathname = '/login'

      setUserDetails(JSON.parse(user))
    }

    getUser()    
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <div className="top">
        <div className="st">
      <a className="navbar-brand" href="/">TSnap</a>
      </div>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
          <Link className="link" to="/Homepage">
              HOME
            </Link>
          </li>
          {loggedIn && (
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
          )}
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/destination">
              DESTINATION
            </Link>


          </li>
          {!userDetails && <Link className="link" to="/login">LOGIN</Link>}
          {userDetails && <div onClick={handleLogout} className="link" style={{marginRight: '15px', cursor: 'pointer'}}>LOGOUT</div>}
          {userDetails && <Link className="link ml-4" to="/payment">PREMIUM</Link>}
        </ul>
      </div>
      <div className="topRight">

        {!userDetails && <i className="topSearchIcon fas fa-search"></i>}
      </div>
    </div>
  );
}
