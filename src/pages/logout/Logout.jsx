import React from 'react'
import "./logout.css"
import Topbar from '../../components/topbar/Topbar'
import { Link } from 'react-router-dom'
const Logout = () => {
    return (
        <>
           <div className='logout'>
           <div className='test'>Do you want to log out from this website?</div>
            <div className='full-cont'>
                <Link to="/login">   <button>Logout</button></Link>
            </div>
           </div>
        </>

    )
}

export default Logout