import React from 'react';
import Header from '../components/navbar/header.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Content';


class App extends React.Component {
    render() {
        return (
            <div className="ui container"> 
                <Router>
                    <div className="ui inverted vertical masthead center aligned segment">
                        <Header />
                        <div>
                        <Content />      
                        </div>            
                    </div>   
                </Router>              
            </div>
        )
    }
} 

export default App;