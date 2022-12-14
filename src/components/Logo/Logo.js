import React from "react";
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mto ">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3 "><img alt='logo'src={brain} style={{paddingTop: '5px'}}/></div>
        </Tilt>
        </div>
    );
}

export default Logo;