import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import Select from 'react-select'

const options = [
  { value: 'components1', label: 'Фильтр воздушный' },
  { value: 'components2', label: 'Масляный фильтр' },
  {
    value: 'components3',
    label: 'Уплотнение пробки корпуса раздаточной коробки',
  },
]

function SelectComponentsButton() {
  const [selectedOption, setSelectedOption] = useState(null)
  const addComponents = useSelector((state) => state.serviceInfoReducer.components)

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={addComponents.map((addComponent) => addComponent = { value: addComponent.id, label: `${addComponent.title}: ${addComponent.price} ₽` })}
        placeholder={
          <div className="select-placeholder-text">дополнительные запчасти</div>
        }
      />
    </>
  )
}

export default SelectComponentsButton
