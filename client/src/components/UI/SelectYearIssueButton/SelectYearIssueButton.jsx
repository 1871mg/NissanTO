import React from 'react';
import Select from 'react-select'
import styles from './SelectYearIssueButton.module.css';

const options = [
	{ value: '2022', label: '2022' },
	{ value: '2021', label: '2021' },
	{ value: '2020', label: '2020' },
	{ value: '2019', label: '2019' },
	{ value: '2018', label: '2018' },
	{ value: '2017', label: '2017' },
	{ value: '2016', label: '2016' },
	{ value: '2015', label: '2015' },
	{ value: '2014', label: '2014' },
	{ value: '2013', label: '2013' },
	{ value: '2012', label: '2012' },
	{ value: '2011', label: '2011' }
]

function SelectYearIssueButton(props) {
	return (
		<div className={styles.selectyearissuebutton}>
				<Select
					options={options}
					placeholder = 'год выпуска автомобиля'
				/>
		</div>
	);
}

export default SelectYearIssueButton;
