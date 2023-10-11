import React, { useState } from 'react';
import DropdownDisplay from './DropdownDisplay';
import DropdownMenu from "./DropdownMenu";
import "../../Dropdown.css";

function Dropdown({ label, multiSelect, selectedOptions, setSelectedOptions }) {
    const [isVisible, setVisibility] = useState("dropdown-visibility-false")

    const toggleSelected = (data) => {
        const name = data["name"]
        if (multiSelect === true) {
            let optionFound = false
            selectedOptions.forEach((obj) => {
                if (obj["name"] === name) {
                    optionFound = true
                }
            })
            if (optionFound === true) {
                setSelectedOptions(arr => arr.filter(option => option["name"] !== name));
            } else {
                setSelectedOptions(arr => [...arr, data])
            }
        } else {
            if (selectedOptions.length === 1) {
                let optionFound = false
                selectedOptions.forEach((obj) => {
                    if (obj["name"] === name) {
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
            <DropdownMenu visibility={isVisible} toggleSelected={toggleSelected} selectedOptions={selectedOptions} />
        </div>
    );
}

export default Dropdown;
