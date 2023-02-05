import React from 'react';

//import image destination ==>
import paris from '../../assets/paris.jpeg';
import dubai from '../../assets/dubai.jpeg';
import newyork from '../../assets/newyork.jpeg';

//import image travelerPicture ==>
import traveler1 from '../../assets/user1.jpeg';
import traveler2 from '../../assets/user2.jpeg';
import traveler3 from '../../assets/user3.jpeg';

//going to use higt order arry methot called Map to display all the data ==>
const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: traveler1,
        travelerName: 'IsraTech',
        socialLink: '@isratech*',
    },
    {
        id: 2,
        destinationImage: dubai,
        travelerImage: traveler2,
        travelerName: 'IsraTech',
        socialLink: '@isratech*',
    },
    {
        id: 3,
        destinationImage: newyork,
        travelerImage: traveler3,
        travelerName: 'IsraTech',
        socialLink: '@isratech*',
    },
];

const Travelers = () => {
    return (
        <div className="travelers">
            <div className="sectionConcainer">
                <h2>Top traveler of this month!</h2>

                <div className="travelersContainer grid">
                    {/* Single  passange card */}
                    {/* <div className="singleTraveler">
                        <img src={paris} className="destinationImage" />
                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={traveler1} className="travelerImage" />
                            </div>
                        </div>
                        <div className="travelerName">
                            <span>IsraTech</span>
                            <p> @isratech8</p>
                        </div>
                    </div> */}
                    {travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
                        return (
                            <div key={id} className="singleTraveler">
                                <img src={destinationImage} className="destinationImage" />
                                <div className="travelerDetails">
                                    <div className="travelerPicture">
                                        <img src={travelerImage} className="travelerImage" />
                                    </div>
                                </div>
                                <div className="travelerName">
                                    <span>{travelerName}</span>
                                    <p> {socialLink}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Travelers;
