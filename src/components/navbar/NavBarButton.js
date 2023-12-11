import React from 'react';

const NavBarButton = ({ svg, text }) => {
    return (
        <a>            
            {svg && <img src={svg} alt={text} />}
            <span>{text}</span>
        </a>
    );
};

export default NavBarButton;