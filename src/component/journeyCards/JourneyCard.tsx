import React from 'react';
import './journeyCard.css';

type JInput = {
    company: string,
    title: string,
    time: string,
    description: string | any}

const JourneyCard = ({company, title, time, description}: JInput) => {
    return (
        <div className="journey-card-container">
            <div className="title-container">{title}</div>
            <div className="content-container">
                <div className="company-name-container">{company}</div>
                <div className="time-container">{time}</div>
                <div> {description} </div>
            </div>
       </div>
    );
}

export default JourneyCard;