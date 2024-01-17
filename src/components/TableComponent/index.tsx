import { FC, ReactNode } from 'react';
import { Table } from 'react-bootstrap';

interface ITableComponentProps {
	headers: string[];
	children?: ReactNode;
}

const TableComponent: FC<ITableComponentProps> = ({
	children,
	headers,
}) => {
	return (
		<Table bordered hover responsive size='sm'>
			<thead>
				<tr>
					<th>№</th>
					{headers?.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</Table>
	);
};

export default TableComponent;
