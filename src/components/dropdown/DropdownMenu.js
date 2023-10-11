import React from 'react';
import DropdownOption from "./DropdownOption";

function DropdownMenu({ visibility, toggleSelected, selectedOptions }) {
  return (
    <div className={['dropdown-menu', visibility].join(' ')}>
      <DropdownOption data={{ "name": "a", "text": "one", "value": "1" }} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
      <DropdownOption data={{ "name": "b", "text": "two", "value": "2" }} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
      <DropdownOption data={{ "name": "c", "text": "three", "value": "3" }} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
      <DropdownOption data={{ "name": "d", "text": "four", "value": "4" }} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
      <DropdownOption data={{ "name": "e", "text": "five", "value": "5" }} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
      <DropdownOption data={{ "name": "f", "text": "six", "value": "6" }} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
      <DropdownOption data={{ "name": "g", "text": "seven", "value": "7" }} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
      <DropdownOption data={{ "name": "h", "text": "eight", "value": "8" }} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
      <DropdownOption data={{ "name": "i", "text": "nine", "value": "9" }} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
      <DropdownOption data={{ "name": "j", "text": "ten", "value": "10" }} selectedOptions={selectedOptions} toggleSelected={(data) => toggleSelected(data)} />
    </div>
  );
}

export default DropdownMenu;
