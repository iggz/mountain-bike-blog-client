import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



const Nav = props => {
    const { routes } = props;
    console.log("routes are", routes);
    return (
        <nav className="navbar is-dark">
            <ul className="navbar is-dark">
                { routes.map(route => (
                    <li className="NavBarItem" key={ `link-${route.linkName}` }>
                        <Link to={ route.linkRoute }>{ route.linkName }</Link>
                    </li>
                )) }
            </ul>
        </nav>
    );
};

export default Nav;

Nav.propTypes = {
    routes: PropTypes.array
};
