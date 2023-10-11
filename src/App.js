import React, { useState } from 'react';
import Dropdown from "./components/dropdown/Dropdown";
import './App.css';

function App() {
  const [selectedMultiOptions, setSelectedMultiOptions] = useState([])
  const [selectedSingleOption, setSelectedSingleOption] = useState([])


  const getSelectedOptions = () => {
    console.log("selectedMultiOptions:", selectedMultiOptions)
    console.log("selectedSingleOption:", selectedSingleOption)
  }

  return (
    <div className={"app"}>
      <h1> Multi Select </h1>
      <Dropdown label={"numbers"} multiSelect={true} selectedOptions={selectedMultiOptions} setSelectedOptions={setSelectedMultiOptions} />
      <h1> Single Select </h1>
      <Dropdown label={"number"} multiSelect={false} selectedOptions={selectedSingleOption} setSelectedOptions={setSelectedSingleOption} />
      <h1>Log Selected Options To Console</h1>
      <button onClick={() => getSelectedOptions()}>Log Selected Options</button>
    </div>
  );
}

export default App;
