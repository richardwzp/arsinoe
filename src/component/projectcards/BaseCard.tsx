import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './baseCard.css';

const BaseCard = ({title, description, image, imageAlt, minHeight, children}:
                      {
                          title: string,
                          description: string,
                          image?: any,
                          imageAlt?: string,
                          minHeight?: number,
                          children?: any}) => {
    const style: any = {
    }
    if (image === undefined) {
        style.backgroundColor = "rgb(14, 17, 22)";
        style.borderStyle = "solid";
        style.borderColor = "white";
        style.border = "1px solid rgb(49, 54, 60)";
    }
    if (minHeight) {
        style.minHeight = minHeight;
    }
    // overriding contentStyle
    const contentStyle = {}

    return (
        <div className="cardContainer" style={style}>
            {
                (image === undefined || imageAlt === undefined) ?
                    <div></div> :
                    (<CardMedia
                component="img"
                image={image}
                alt={imageAlt}
                style={style}
            />)
            }

            <div className="contentContainer" style={contentStyle}>
                <div className={image === undefined ? "" : "innerText"}>
                    <Typography gutterBottom variant="h5" component="div" color={"common.white"}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="common.white">
                        {description}
                    </Typography>
                </div>
                {children}
            </div>
        </div>
    );
}

export default BaseCard;