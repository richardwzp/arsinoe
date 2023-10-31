import React from 'react';
import "@fontsource/abril-fatface";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';

const MyName = ({className}: any) => {

   const homeStyle = {
      fontFamily: "Abril Fatface",
      fontSize: 70,
      color: "white",
   }
   const isTrue = useMediaQuery("@media screen and (max-width: 690px)");
   if (isTrue) { homeStyle.fontSize = 50; }
   const cname = className === undefined ? "" : className;
   return (
      <Typography sx={homeStyle} className={cname}>Richard Wang</Typography>
   )
}


export default MyName