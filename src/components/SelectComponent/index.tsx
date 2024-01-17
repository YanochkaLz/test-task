import { FC } from 'react';
import { Form } from 'react-bootstrap';

import './styles.scss';

interface ISelectComponentProps {
	options: string[];
	onChange: (value: string) => void;
}

const SelectComponent: FC<ISelectComponentProps> = ({ options, onChange }) => {
	return (
		<Form.Select
			onChange={e => onChange(e.target.value)}
			className='select-component'
		>
			<option>---</option>
			{options?.map((option, index) => (
				<option key={index}>{option}</option>
			))}
		</Form.Select>
	);
};

export default SelectComponent;
