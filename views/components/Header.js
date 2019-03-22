import React from 'react';

const Header = () => {
    return (
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    React To-do List
                </a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    );
};

export default Header;