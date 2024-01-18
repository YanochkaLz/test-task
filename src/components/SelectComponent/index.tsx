import { FC } from 'react';
import { Form } from 'react-bootstrap';

import './styles.scss';

interface ISelectComponentProps {
	options: string[];
	onChange: (value: string) => void;
	value: string;
}

const SelectComponent: FC<ISelectComponentProps> = ({ options, onChange, value }) => {
	return (
		<Form.Select
			onChange={e => onChange(e.target.value)}
			className='select-component'
			value={value}
		>
			<option value={'---'}>---</option>
			{options?.map((option, index) => (
				<option value={option} key={index}>{option}</option>
			))}
		</Form.Select>
	);
};

export default SelectComponent;
