import React from 'react';

// import img
import imageGrid from '../../assets/dubai.jpeg';

const Lounge = () => {
    return (
        <div className="lounge">
            <div className="sectionContainer grid">
                <div className="imgDiv">
                    <img src={imageGrid} />
                </div>

                <div className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>

                    <div className="grids grid">
                        <div className="singleGrid">
                            <span className="gridTitle">Help throung the airpot</span>
                            <p>
                                You can aslo call airlines from your phone and bok a flinght tiket to one of your
                                favorite destinations.
                            </p>
                        </div>

                        <div className="singleGrid">
                            <span className="gridTitle">Priority Boarding</span>
                            <p>
                                You can aslo call airlines from your phone and bok a flinght tiket to one of your
                                favorite destinations.
                            </p>
                        </div>

                        <div className="singleGrid">
                            <span className="gridTitle">Help throung the airpot</span>
                            <p>
                                You can aslo call airlines from your phone and bok a flinght tiket to one of your
                                favorite destinations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lounge;
