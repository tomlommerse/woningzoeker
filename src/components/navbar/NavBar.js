import React from 'react';
import NavBarButton from './NavBarButton';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <NavBarButton svg="./img/icon/home.svg" text="Home" />
            <NavBarButton svg="./img/icon/zoek.svg" text="Zoek" />
            <NavBarButton svg="./img/icon/kaart.svg" text="Kaart" />
            <NavBarButton svg="./img/icon/3d.svg" text="3D" />
        </nav>
    );
};

export default NavBar;