import React from 'react';
import DropdownOption from "./DropdownOption";

function DropdownMenu({ optionData, visibility, toggleSelected, selectedOptions }) {
  return (
    <div className={['dropdown-menu', visibility].join(' ')}>
      {
        optionData.map((obj, i) => {
          return <DropdownOption key={i} data={obj} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
        })
      }
    </div>
  );
}

export default DropdownMenu;
