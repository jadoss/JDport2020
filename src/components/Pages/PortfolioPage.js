import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import PortfolioCard from './PortfolioCard';

class Portfolio extends Component { 
    render() {
        return (
            <div className="ui message" >
                <Fade top>
                    <h1 className="ui huge header">Portfolio</h1>    
                </Fade>
                <hr />
                <Fade>
                <PortfolioCard/>    
                </Fade>
                <hr />                  
                <Link to="/" className="ui big primary button">Back to the beginning</Link>
            </div>
        );
    }
}

export default Portfolio