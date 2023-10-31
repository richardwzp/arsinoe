import React from 'react';
import "@fontsource/abril-fatface";
import Typography from "@mui/material/Typography";
const Greeting = ({children, className}: any) => {
const homeStyle = {
    fontFamily: "Abril Fatface",
    fontSize: 20,
    color: "white",

}

const cname = className === undefined ? "" : className;
   return (
      <Typography sx={homeStyle} className={cname}>{children}</Typography>
   )
}


export default Greeting