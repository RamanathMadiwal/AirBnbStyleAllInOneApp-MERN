import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg ">

                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse text-white" id="navbarNav">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link text-white">
                                    Home
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/Login" className="nav-link text-white">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Register" className="nav-link text-white">
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AddRental" className="nav-link text-white">
                                    Add Rental
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">
                                    Become a Host
                                </Link>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Navbar;
