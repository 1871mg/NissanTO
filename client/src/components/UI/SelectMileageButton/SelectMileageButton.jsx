import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { setMilegeSelect } from '../../../redux/actionCreators/serviceInfoAC'
import { sagaGetServiceTypeAC } from '../../../redux/actionCreators/asyncAC/asyncServiseInfoAC'

function SelectMileageButton() {
  const dispatch = useDispatch()
  const allMilege = useSelector((state) => state.serviceInfoReducer.allMilege)
  const [selectedOption, setSelectedOption] = useState(null)

  const setSelectedMilegeOption = (event) => {
    const selectMilegeOption = event.value
    setSelectedOption(event)
    dispatch(setMilegeSelect(selectMilegeOption))
  }

  return (
    <div>
      {allMilege && (
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedMilegeOption}
          options={allMilege.map(
            (option) =>
              (option = { value: option.id, label: `${option.distanse} км` })
          )}
          placeholder = 'выберите пробег или год'
        />
      )}
    </div>
  )

}

export default SelectMileageButton
