import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'components1', label: 'Фильтр воздушный' },
  { value: 'components2', label: 'Масляный фильтр' },
  { value: 'components3', label: 'Уплотнение пробки корпуса раздаточной коробки' },
];

function SelectComponentsButton() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={<div className="select-placeholder-text">дополнительные запчасти</div>}
      />
    </>
  );
}

export default SelectComponentsButton;
