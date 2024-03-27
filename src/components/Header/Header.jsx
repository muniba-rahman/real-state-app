import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container py-2">
                <a className="navbar-brand" href="/"><img src='./logo.png' alt="logo" style={{width:'90px',height:'47px'}}/>Homigo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/resedency">Resedencies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/values">Our Values</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/started">Get Started</a>
                            </li>
                        </ul>
                        <form className="d-flex mx-4" role="search">
                        <button className='btn mx-1 btn-warning' href='/contact'>Contact</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;