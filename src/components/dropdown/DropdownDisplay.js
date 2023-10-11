import React from 'react';

function DropdownDisplay({ selectedOptions, toggleVisibility }) {
    return (
        <div className="dropdown-menu-display" onClick={() => toggleVisibility()}>
            {
                selectedOptions.length === 0 ? <p>None</p> : selectedOptions.map((obj, i) => {
                    if (selectedOptions.length > 1 && i < selectedOptions.length - 1) {
                        return <p key={i}>{obj["text"]},&nbsp;</p>
                    } else {
                        return <p key={i}>{obj["text"]}</p>
                    }
                })
            }
        </div>
    );
}

export default DropdownDisplay;
