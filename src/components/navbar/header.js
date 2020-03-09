import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="ui large secondary inverted pointing menu">
                <Link to="/" className="item">
                    <i className="home icon" />
                </Link>
                <div className="right menu">
                    <Link to="/About" className="item">
                        About
                    </Link>
                    <Link to="/Portfolio" className="item">
                        Portfolio
                    </Link>
                </div>
            </div>         
        );    
    }  
}

export default Header