import React from 'react';

function DropdownOption({ data, toggleSelected, selectedOptions }) {
    const generateClassNames = () => {
        const classes = ["dropdown-option", "dropdown-option:hover"]
        selectedOptions.forEach((obj) => {
            if (obj["text"] === data["text"]) {
                classes.push("dropdown-option-selected")
                return classes
            }
        })
        return classes
    }

    return (
        <div className={generateClassNames().join(' ')} onClick={() => toggleSelected(data)}>
            <p>{data["text"]}</p>
        </div>
    );
}

export default DropdownOption;
