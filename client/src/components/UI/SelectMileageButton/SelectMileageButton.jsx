import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { setMilegeSelect } from '../../../redux/actionCreators/serviceInfoAC'

function SelectMileageButton() {
  const dispatch = useDispatch()
  const allMilege = useSelector((state) => state.serviceInfoReducer.allMilege)
  const [selectedOption, setSelectedOption] = useState(null)
  const setSelectedMilegeOption = (event) => {
    const selectMilegeOption = event.value
    console.log('eventMilege', event)
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
        />
      )}
    </div>
  )
}

export default SelectMileageButton
