import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import './introSection.css';
import MyName from '@src/component/heading/myName';
import Greeting from '@src/component/heading/Greeting';
import greenMe2 from '@public/ImageResource/greenMe2.png';
import Image from 'next/image';

const textElementStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const name = <MyName />

const textElement = (
  <div className="textBlockContainer" style={textElementStyle}>
    <Fade top cascade>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ width: "100%" }}>
          <Greeting>Hello, this is</Greeting>
          {name}
        </div>
        <div style={{ maxWidth: "450px", lineHeight: 2 }}>
          I am a rising Senior at Northeastern University studying Computer Science with a software concentration.
          <br />
          A Programming language enthusiast, avid D&D player/DM, fantasy artist, comic-book fan, and cinephile.
        </div>
      </div>
    </Fade>
  </div>
);

const introPictureStyle = {
  display: "flex",
  justifyContent: "center",
  gap: 20,
}

const IntroSection = ({ style, className }: any) => {
  return (
    <div className={className} style={style}>
      <div className="introPicture" style={introPictureStyle}>
        {textElement}
        <div className={"photoContainer"}>
          <Zoom>

            <img src={greenMe2.src} alt="me" style={{ maxHeight: '600px', border: "0px solid", borderColor: "white" }} />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
