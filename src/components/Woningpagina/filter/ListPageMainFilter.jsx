// src/components/Woningpagina/filter/ListPageMainFilter.js
import React from 'react';
import '../../../styles/filterlistpage.css';

const ListPageMainFilter = ({ type, isActive, onClick }) => {
    const modifiedType = type === "" ? "Alle Woningen" : type; //display "Alle Woningen" op de standaard lege filter plaats

    return (
        <div className={`filter-slider`}>
            <div className={`filter-button ${isActive ? 'active' : ''}`}
                onClick={() => onClick(modifiedType)}>
                {modifiedType}
            </div>
        </div>
    );
};

export default ListPageMainFilter;
