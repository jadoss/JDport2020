import React from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class Home extends React.Component {
    render() {
        return (
            <div className="ui message inverted">
                <Fade top>
                <h1 className="ui huge header inverted">Home</h1>    
                </Fade>
                <p className="lead">
                    Welcome to my Page
                </p>
                <p className="lead">
                    This is where I keep all track of all my latest projects and past projects.
                </p>
                <p>
                    Please follow the navigation to see all my projects and learn something about me :)
                </p>
                <Link to='/About' className="ui big primary button">Learn More About Me Here</Link>
            </div>
        );
    }
}

export default Home