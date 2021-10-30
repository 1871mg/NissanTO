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
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default SelectButton;
