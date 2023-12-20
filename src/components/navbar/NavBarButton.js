// NavBarButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBarButton = ({ svg, text}) => {
return (
<Link to={text} className="navButton">
    <img className="navSvg" src={svg} alt={text} />
    <span>{text}</span>
</Link>
);
};

export default NavBarButton;
