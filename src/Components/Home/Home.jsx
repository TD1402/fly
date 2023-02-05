import React from 'react';

//import assets ===>
import video from '../../assets/video.mp4';
import plance from '../../assets/plance.png';

const Home = () => {
    return (
        <div className="home flex container">
            <div className="mainText">
                <h1>Create Ever-lasting Menmories With Us</h1>
            </div>

            <div className="homeImage flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className="video"></video>
                </div>

                <img src={plance} className="plance" />
            </div>
        </div>
    );
};

export default Home;
