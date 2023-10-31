import React from 'react';
import Button from "@mui/material/Button";

const buttonStyle = {
  borderStyle: "solid",
  borderRadius: "20px / 20px",
  border: "3px solid rgb(49, 54, 60)",
  overflow: "hidden",
  color: "white",
  fontSize: "80%",
  margin: "10px",
  marginLeft: 0,
}

const TinyButton = ({text, link, icon, style}: any) => {
    style = style === undefined ? {} : style;
    const mergedStyle = {
        ...buttonStyle,
        ...style,
    }
    return (
        <Button
              focusRipple
              variant="outlined"
              startIcon={icon}
              href={link}
              target="_blank"
              style={mergedStyle}>
            {text}
        </Button>
    );
}

export default TinyButton;