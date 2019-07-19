import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



const Nav = props => {
    const { routes } = props;
    console.log("routes are", routes);
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-burger">
                <div className="navbar-brand">
                    <div className="navbar-item" >

                    </div>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        { routes.map(route => (
                            <li className="navbar-item" key={ `link-${route.linkName}` }>
                                <Link to={ route.linkRoute }>{ route.linkName }</Link>
                            </li>
                        )) }

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>



    );
};

export default Nav;

Nav.propTypes = {
    routes: PropTypes.array
};

{/* 
<div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    { routes.map(route => (
                        <li className="navbar-item" key={ `link-${route.linkName}` }>
                            <Link to={ route.linkRoute }>{ route.linkName }</Link>
                        </li>
                    )) }
                </div>
            </div> */}