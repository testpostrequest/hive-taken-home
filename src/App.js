import React, { useState } from 'react';
import Dropdown from "./components/dropdown/Dropdown";
import './styles/App.css';

function App() {
  // Hooks are created for each Dropdown menu.
  // These hooks are used to store the selected options for each menu.
  const [animalSelectedOptions, setAnimalSelectedOptions] = useState([])
  const [numPetsSelectedOption, setNumPetsSelectedOption] = useState([])

  const getSelectedOptions = () => {
    console.log("animalSelectedOptions:", animalSelectedOptions)
    console.log("numPetsSelectedOption:", numPetsSelectedOption)
  }

  const favoriteAnimalOptionData = [
    { "text": "Dog", "value": "dog" },
    { "text": "Cat", "value": "cat" },
    { "text": "Fish", "value": "fish" },
    { "text": "Mouse", "value": "mouse" },
    { "text": "Turtle", "value": "turtle" },
    { "text": "Lizard", "value": "lizard" },
  ]

  const numberOfPetsOptionData = [
    { "text": "One", "value": 1 },
    { "text": "Two", "value": 2 },
    { "text": "Three or more", "value": 3 },
  ]

  return (
    <div className={"App"}>
      <h1> Multi Select </h1>
      <Dropdown
        label={"Favorite Animal"}
        optionData={favoriteAnimalOptionData}
        multiSelect={true}
        selectedOptions={animalSelectedOptions}
        setSelectedOptions={setAnimalSelectedOptions}
      />
      <h1> Single Select </h1>
      <Dropdown
        label={"Number of Pets"}
        optionData={numberOfPetsOptionData}
        multiSelect={false}
        selectedOptions={numPetsSelectedOption}
        setSelectedOptions={setNumPetsSelectedOption}
      />
      <h1>Log Selected Options To Console</h1>
      <button onClick={() => getSelectedOptions()}>Log Selected Options</button>
    </div>
  );
}

export default App;
