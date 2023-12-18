import React from 'react';

const NavBarButton = ({ svg, text }) => {
    return (
        <a class="navButton">            
            <img class="navSvg" src={svg} alt={text} />
            <span>{text}</span>
        </a>
    );
};

export default NavBarButton;