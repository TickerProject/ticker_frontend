import React from 'react';
import TickerLogo from '../resources/media/logo-white.svg';

// eslint-disable-next-line react/prop-types
const Image = ({ imagePath } : { imagePath: string }) => {
    return (
        <div>
            <img src={ imagePath } alt={ imagePath } />
        </div>
    );
}
export default Image;