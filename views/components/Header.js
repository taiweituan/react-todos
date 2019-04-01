import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    React To-do List
                </Link>
                {/* <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
            </div>
        </div>
    );
};

export default Header;