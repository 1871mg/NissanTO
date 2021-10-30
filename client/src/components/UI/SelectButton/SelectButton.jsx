import React, { useState } from 'react';
import Select from 'react-select';
// import { valueTernary } from 'react-select/dist/declarations/src/utils';

// const options = [
//   { value: 'model1', label: 'Juke' },
//   { value: 'model2', label: 'Note' },
//   { value: 'model3', label: 'Micra' },
// ];

function SelectButton({options}) {
  const [selectedOption, setSelectedOption] = useState('');
  let optionsSelect  = options.map((option) => option = {value: option.id, label: option.title})
  
  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={optionsSelect}
      />
    </div>
  );
}

export default SelectButton;
