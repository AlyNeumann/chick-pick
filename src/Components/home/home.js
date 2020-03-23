//TODO: make responsive & animate
import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import cpmTitleLg from '../../images/cpmTitleLg.png';
import cpmTitle2Lg from '../../images/cpmTitle2Lg.png'
import cpm_mic from '../../images/cpm_mic.png'
import './home.css'

const Home = () => {
    return (<div>
        <Jumbotron className="jumbotron-home">
            <div className="container">
                <div className="top-imgs">
                    <img className="cpm-title" src={cpmTitleLg} />
                </div>
                <div>
                    <Link to="/video">
                        <h3>Check out the very first video in our brand new video series!</h3>
                    </Link>
                </div>
                <div>
                    <img className="cpm-title2" src={cpmTitle2Lg} />
                    {/* </div>
            <div> */}
                    <img className="cpm-mic" src={cpm_mic} />
                </div>
            </div>
        </Jumbotron>
    </div>)
}

export default Home;