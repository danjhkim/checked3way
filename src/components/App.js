import '../css/app.css';
import CheckBox from './CheckBox';

const App = () => {
	return (
		<div className='App-container'>
			<div className='top'>
				<div className='checkType'>
					<div className='typeTitles'>Base Checkbox</div>
					<CheckBox />
				</div>
				<div className='checkType'>
					<div className='typeTitles'>Stacked Checkboxes</div>
					<CheckBox />
					<CheckBox />
					<CheckBox />
				</div>
				<div className='checkType'>
					<div className='typeTitles'>Inline Checkboxes</div>
					<div className='inline'>
						<CheckBox />
						<CheckBox />
						<CheckBox />
					</div>
				</div>
			</div>
			<div className='bottom'>
				<div className='checkType'>
					<div className='typeTitles'>Checked</div>
					<CheckBox initialCheckState={2} />
				</div>
				<div className='checkType'>
					<div className='typeTitles'>Checked Disabled</div>
					<CheckBox initialCheckState={2} disabledCheck={true} />
				</div>
				<div className='checkType'>
					<div className='typeTitles'>Checkbox Disabled</div>
					<CheckBox disabledCheck={true} />
				</div>
				<div className='checkType'>
					<div className='typeTitles'>Checked partial</div>
					<CheckBox initialCheckState={3} />
				</div>
				<div className='checkType'>
					<div className='typeTitles'>Checked partial Disabled</div>
					<CheckBox initialCheckState={3} disabledCheck={true} />
				</div>
			</div>
		</div>
	);
};

export default App;
