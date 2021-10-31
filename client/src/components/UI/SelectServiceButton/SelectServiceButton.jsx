import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'service1', label: 'Диагностика компьютерная расширенная' },
  { value: 'service2', label: 'Диагностика тормозной системы' },
  { value: 'service3', label: 'Диагностика внешнего освещения' },
];

function SelectServiceButton() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={<div className="select-placeholder-text">дополнительные услуги</div>}
      />
    </>
  );
}

export default SelectServiceButton;
