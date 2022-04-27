import { useState } from 'react';
import '../css/checkbox.css';
import { default as checked } from '../images/ic_checkbox_checked.svg';
import { default as halfchecked } from '../images/ic_checkbox_half.svg';
import { default as unchecked } from '../images/ic_checkbox_unchecked.svg';

const CheckBox = ({ disabledCheck, initialCheckState, text }) => {
	const [checkState, setCheckState] = useState(initialCheckState);

	const clickerFunc = () => {
		// simple 3 way state changing logic
		setCheckState(checkState !== 3 ? checkState + 1 : 1);
	};

	const checkSelector = () => {
		if (checkState === 1) {
			return unchecked;
		} else if (checkState === 2) {
			return checked;
		} else {
			return halfchecked;
		}
	};

	return (
		<div className='container' disabled={disabledCheck}>
			<div className='square' onClick={clickerFunc}>
				<img src={checkSelector()} alt='check' className='checker' />
			</div>
			<span className='text'>{text}</span>
		</div>
	);
};

CheckBox.defaultProps = {
	disabledCheck: false,
	initialCheckState: 1,
	text: 'Checkbox 1',
};

export default CheckBox;
