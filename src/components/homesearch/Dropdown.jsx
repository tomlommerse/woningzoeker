import React from 'react';


function Dropdown({ options }) {
    return (
        <div>
        <select className='dropdown_box'>
            {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
            ))}
        </select>
        </div>
    );
}

export default Dropdown;
