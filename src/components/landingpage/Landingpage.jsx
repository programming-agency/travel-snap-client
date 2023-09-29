import React from 'react';
import "./landingpage.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css"
import { Link } from 'react-router-dom';


const Landingpage = () => {

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    {/* <div className="container-fluid">
                        <a className="navbar-brand" href="/">TSnap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">Destination</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">Sign Up</Link>
                                </li>
                            </ul>
                        </div> 
                    </div> */}
                </nav>
            </div>

            <div className="full-container-box">



                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={"https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="d-block w-100 hh" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://images.pexels.com/photos/230794/pexels-photo-230794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="d-block w-100 hh" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://images.pexels.com/photos/2198520/pexels-photo-2198520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="d-block w-100 hh" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <h1 className='posa'>TRAVELSNAP</h1>
                <h3 className='posa2'>Discover, Snap, Share, Repeat</h3>

                

                <Link to="/register">
                    <button className='posa3'>Explore</button>
                </Link>
            </div>
        </>


    );
}

export default Landingpage;
