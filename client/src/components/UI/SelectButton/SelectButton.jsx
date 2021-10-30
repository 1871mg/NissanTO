import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Select from 'react-select'
// import { valueTernary } from 'react-select/dist/declarations/src/utils';

// const options = [
//   { value: 'model1', label: 'Juke' },
//   { value: 'model2', label: 'Note' },
//   { value: 'model3', label: 'Micra' },
// ];

function SelectButton({ options }) {
  const { allModels } = useSelector((state) => state.serviceInfoReducer)
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <div>
      {allModels && (
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={allModels.map(
            (option) => (option = { value: option.id, label: option.title })
          )}
        />
      )}
    </div>
  )
}

export default SelectButton
