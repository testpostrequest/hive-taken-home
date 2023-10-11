import React, { useState } from 'react';
import DropdownDisplay from './DropdownDisplay';
import DropdownMenu from "./DropdownMenu";
import "../../styles/Dropdown.css";

function Dropdown({ label, optionData, multiSelect, selectedOptions, setSelectedOptions }) {
    const [isVisible, setVisibility] = useState("dropdown-visibility-false")

    const toggleSelected = (data) => {
        const text = data["text"]
        if (multiSelect === true) {
            let optionFound = false
            selectedOptions.forEach((obj) => {
                if (obj["text"] === text) {
                    optionFound = true
                }
            })
            if (optionFound === true) {
                setSelectedOptions(arr => arr.filter(option => option["text"] !== text));
            } else {
                setSelectedOptions(arr => [...arr, data])
            }
        } else {
            if (selectedOptions.length === 1) {
                let optionFound = false
                selectedOptions.forEach((obj) => {
                    if (obj["text"] === text) {
                        optionFound = true
                    }
                })
                if (optionFound === true) {
                    setSelectedOptions([]);
                } else {
                    setSelectedOptions([data]);
                }
            } else {
                setSelectedOptions([data])
            }
        }
    };

    const toggleVisibility = () => {
        if (isVisible === "dropdown-visibility-false") {
            setVisibility("dropdown-visibility-true")
        } else {
            setVisibility("dropdown-visibility-false")
        }
    }

    return (
        <div className="dropdown">
            <label>{label}</label>
            <DropdownDisplay selectedOptions={selectedOptions} toggleVisibility={toggleVisibility} />
            <DropdownMenu optionData={optionData} visibility={isVisible} toggleSelected={toggleSelected} selectedOptions={selectedOptions} />
        </div>
    );
}

export default Dropdown;
