import React from 'react';
import Fade from "react-reveal/Fade";
import {Box} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
const Loading = () => {

    return (<Box
                sx={{
                    border: 1,
                    borderRadius: "2%",
                    maxWidth: "300px",
                }}
                style={{
                    minWidth: "400px",
                    minHeight: "300px",
                    borderColor: "grey",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"}}>
                <Skeleton sx={{ bgcolor: 'grey.900', width: "80%", height: "21px", marginTop: "10px"}}/>
                <div style={{width: "80%", display: "flex", flexDirection: "row"}}>
                    <Skeleton variant="circular" sx={{
                        bgcolor: 'grey.900',
                        height: "21px",
                        width: "21px",
                        marginRight: "10px"}}/>
                    <Skeleton sx={{bgcolor: 'grey.900', height: "21px", width: "100%"}}/>
                </div>
                <Skeleton sx={{ bgcolor: 'grey.900', width: "80%", height: "42px"}}/>
                <div style={{width: "80%", display: "flex", flexDirection: "row", marginTop: 0}}>
                    <Skeleton sx={{
                        bgcolor: 'grey.900',
                        height: "103px",
                        width: "21px",
                        marginRight: "10px"}}/>
                    <Skeleton sx={{bgcolor: 'grey.900', height: "103px", width: "100%"}}/>
                </div>
                <div style={{width: "80%", display: "flex", flexDirection: "row", }}>
                    <Skeleton sx={{
                        bgcolor: 'grey.900',
                        height: "21px",
                        width: "50%",
                        marginRight: "10px"}}/>
                    <Skeleton sx={{bgcolor: 'grey.900', height: "21px", width: "50%"}}/>
                </div>
                <div style={{width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <Skeleton sx={{bgcolor: 'grey.900', height: "91px", width: "30%"}}/>
                    <Skeleton sx={{bgcolor: 'grey.900', height: "91px", width: "30%"}}/>
                    <Skeleton sx={{bgcolor: 'grey.900', height: "91px", width: "30%"}}/>
                </div>
                <div style={{width: "80%", display: "flex", flexDirection: "row"}}>
                    <Skeleton sx={{bgcolor: 'grey.900', height: "21px", width: "100%"}}/>
                    <Skeleton variant="circular" sx={{
                        bgcolor: 'grey.900',
                        height: "21px",
                        width: "21px",
                        marginLeft: "10px",
                        marginBottom: "10px"}}/>
                </div>
            </Box>);
};

const FadeLoading = () => {
    return (
        <Fade bottom delay={600}>
            <Loading/>
        </Fade>
    );
}

export {Loading, FadeLoading};