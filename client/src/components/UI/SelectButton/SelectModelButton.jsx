import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { setModelSelect } from '../../../redux/actionCreators/serviceInfoAC'

function SelectModelButton() {
  const dispatch = useDispatch()
  const allModels = useSelector((state) => state.serviceInfoReducer.allModels)
  const [selectedOption, setSelectedOption] = useState()
  
  const setSelectedModelOption = (event) => {
    const selectModelOption = event.value
    console.log('eventModel', event.label)
    setSelectedOption(event.label)
    dispatch(setModelSelect(selectModelOption))
  }
  console.log('endmodel',selectedOption);

  return (
    <div>
      {allModels && (
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedModelOption}
          options={allModels.map(
            (option) => (option = { value: option.id, label: option.title })
          )}
        />
      )}
    </div>
  )
}

export default SelectModelButton
