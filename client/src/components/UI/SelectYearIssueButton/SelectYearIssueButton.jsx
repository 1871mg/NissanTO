import React , { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import styles from './SelectYearIssueButton.module.css'
import { setYearSelectAC } from '../../../redux/actionCreators/serviceInfoAC'

function SelectYearIssueButton(props) {
  const dispatch = useDispatch()
  const options = useSelector((state) => state.serviceInfoReducer.hash.years)

  const [selectedOption, setSelectedOption] = useState(null)

  const setSelectedModelOption = (event) => {
    const selectYearOption = event.value
    setSelectedOption(event.label)
    dispatch(setYearSelectAC(selectYearOption))
  }

  return (
    <div className={styles.selectyearissuebutton}>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedModelOption}
        options={options}
        placeholder="год выпуска автомобиля"
      />
    </div>
  )
}

export default SelectYearIssueButton
