import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'model1', label: 'Juke' },
  { value: 'model2', label: 'Note' },
  { value: 'model3', label: 'Micra' },
];

function SelectButton() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={<div className="select-placeholder-text">выберите автомобиль</div>}
      />
    </>
  );
}

export default SelectButton;
