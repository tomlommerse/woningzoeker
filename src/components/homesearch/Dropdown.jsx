import React from 'react';

function Dropdown({ options, placeholder }) {
    return (
        <select className='dropdown_box'>
            <option className='dropdown_options' value='' disabled selected>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option className='dropdown_options' key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;
