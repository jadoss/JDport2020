import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import profile from "/Users/x/github/2020/React/jdrep20/src/images/profile.png";

class Bio extends React.Component {
    render() {
        return (
                <div className="ui message">
                    <Fade top>
                    <h1 className="ui huge header">About Me</h1>    
                    </Fade>
                    <hr />
                    <div className="ui two column doubling stackable grid container">
                        <div className="column">
                            <img className="ui fluid image" alt=""src={profile} />
                        </div>
                        <div className="column">
                            <div className="header">
                                James Doss
                            </div>
                            <p className="lead">
                                Hello! Welcome to my web page. I am a Full Stack Web Developer who enjoys a challenge and working with others 
                                to develop new & valuable applications. I've had the privilege of working on some exciting projects with fellow 
                                team members and I love to collaborate on fresh ideas. My main strengths are my knowledge of 
                                JavaScript, React, Bootstrap, and server deployment. I believe as a developer, the best way for me to stay 
                                sharp is to push myself to learn new languages, and always be creating something. My background in 
                                theatre and culinary arts has shown me the power of partnership.  Coming together with a team to pull off 
                                an extraordinary experience on (or behind) stage or satisfying the hunger of hundreds on any given day has 
                                shown me that when people get together with a common goal amazing things can happen. 
                                As a mission I seek to take this ability to the world of technology and find an outlet to collaborate with others. 
                                You will find some examples of my work in the Projects page, and feel free to contact me with the link provided below to get in touch. Thank you!
                            </p>
                        </div>
                    </div>
                    <hr />
                    <Link to="/Portfolio" className="ui big primary button">Check out the Repetoire</Link>
                </div>        
        );
    }
} 

export default Bio