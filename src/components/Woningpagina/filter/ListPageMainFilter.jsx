// src/components/Woningpagina/filter/ListPageMainFilter.js
import React from 'react';
import '../../../styles/filterlistpage.css';

const ListPageMainFilter = ({ type, isActive, onClick }) => {
    return (
        <div className={`filter-slider`}>
            <div className={`filter-button ${isActive ? 'active' : ''}`}
                onClick={() => onClick(type)}>
                {type}
            </div>
        </div>
    );
};

export default ListPageMainFilter;
