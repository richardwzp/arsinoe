import React, {useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import Zoom from "react-reveal";

type SeeFadingProp = {children: React.ReactNode};
const SeeFading: React.FC<SeeFadingProp> = ({children}) => {
        const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0,
    });
    useEffect(()=>{
        //do something here when inView is true
    }, [inView])

    return (
        <div ref={ref} style={{margin: "50px"}}>
            <Zoom>
                {children}
            </Zoom>
        </div>
    );
}

export default SeeFading;