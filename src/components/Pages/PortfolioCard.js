import React from 'react';
import { reactPage, javascript } from "/Users/x/github/2020/React/jdrep20/src/api/data.json";
import { Link } from 'react-router-dom';

class PortfolioCard extends React.Component {

    render() {
        return (
            <div className="ui four column doubling stackable grid container">
                {reactPage.map((exampleDetail, index)=>{
                    return (
                        <div className="column" key={index}>
                            <div className="ui card">
                                <div className="content">
                                    <div className="header">
                                        {exampleDetail.title}
                                    </div>
                                </div>
                                <div className="content">
                                    <h4 className="ui sub header">
                                        {exampleDetail.tools}
                                    </h4>
                                    <hr />
                                    <div className="event">
                                        <div className="content">
                                            <div className="summary">
                                                {exampleDetail.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="extra content">
                                    <a className="ui button" target="_blank"href={exampleDetail.github}>Code</a>
                                    <a className="ui button" target="_blank" href={exampleDetail.demo}>Demo</a>
                                </div>
                            </div>
                        </div>   
                    )                           
                })}
                {/* {javascript.map((exampleDetail, index)=>{
                    return (
                        <div className="column" key={index}>{exampleDetail.title}</div>   
                    )                           
                })} */}
            </div>
        );
    }
}

export default PortfolioCard
