// src/components/Woningpagina/filter/ListPageMainFilter.js
import React from 'react';

const ListPageMainFilter = ({ type, isActive, onClick }) => {
    return (
    <div
        className={`filter-button ${isActive ? 'active' : ''}`}
        onClick={() => onClick(type)}
    >
        {type}
    </div>
    );
};

export default ListPageMainFilter;
