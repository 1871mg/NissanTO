import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import Select from 'react-select';


function SelectServiceButton() {
  const [selectedOption, setSelectedOption] = useState(null);
  const addServices = useSelector((state) => state.serviceInfoReducer.services)

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={addServices.map((addService) => addService = { value: addService.id, label: `${addService.title}: ${addService.price} ₽` })}
        placeholder={<div className="select-placeholder-text">дополнительные услуги</div>}
      />
    </>
  );
}

export default SelectServiceButton;
