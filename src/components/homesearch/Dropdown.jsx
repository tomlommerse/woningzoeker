// Dropdown.jsx
import React from 'react';
import jsonData from '../../assets/wonen-in-de-kuil.json';
import '../../styles/dropdown.css';

function Dropdown({ dataKey, roundBy, roundDirection, onChange, placeholder }) {
    const options = jsonData.plots.map((plot) => {
        let roundedValue;
        if (roundBy) {
            roundedValue = Math.round(plot[dataKey] / roundBy) * roundBy;
        } else {
            roundedValue = plot[dataKey];
        }

        // Adjust based on roundDirection
        if (roundDirection === 'up') {
            roundedValue = Math.ceil(plot[dataKey] / roundBy) * roundBy;
        } else if (roundDirection === 'down') {
            roundedValue = Math.floor(plot[dataKey] / roundBy) * roundBy;
        }

        return roundedValue;
    });

    const uniqueOptions = Array.from(new Set(options));

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };


    // sort the array
    uniqueOptions.sort();

    return (
        <div>
            <select className='dropdown_box' onChange={handleSelectChange}>
                <option className='dropdown_options' value='' disabled selected>
                    {placeholder}
                </option>
                
                {uniqueOptions.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
