import React from 'react';
import TickerLogo from '../resources/media/logo-white.svg';

// eslint-disable-next-line react/prop-types
const Image = ({ imagePath } : { imagePath: string }) => {
    return (
        <div>
            <svg className="">
                <use xlinkHref={imagePath}></use>
            </svg>
        </div>
    );
}
export default Image;