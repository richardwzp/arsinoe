import React from 'react';
import './interestSection.css';
import { regularPlContent, learningPlContent } from "./interestContent";

const InterestBLock = ({name, entry}: any) => {
    return (
       <div>
           <div style={{fontSize: "150%"}}> {name} </div>
           <ul>{entry.map((a: any, index: number) => (<li key={index}>{a}</li>))}</ul>
       </div>
    );
}

const InterestSection = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%", paddingLeft: "50px"}}>
            <div className="titleName">Programming Language </div>
            <div> The very first introductory computer science course I took at NEU were taught by
                two awesome professors who come from Programming language background. Since then
                I have fell in love with it, and even took a compiler course in Spring of 2022.
                I like to explore the design choices made by languages, and study the impact they have on the
                code written in them.
                </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <InterestBLock
                    name="languages I regularly use"
                    entry={regularPlContent}/>

                <InterestBLock
                    name="language I'm still experimenting with"
                    entry={learningPlContent}/>
            </div>
        </div>
    );
}

export default InterestSection;


