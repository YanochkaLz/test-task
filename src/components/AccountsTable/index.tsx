import { FC } from 'react';
import { Table, Stack } from 'react-bootstrap';
import { IAccount } from '../../models/IAccount';

interface IAccountsTableProps {
	data: IAccount[];
	selectedAccountId: number | null;
	setSelectedAccountId: (id: number) => void;
}

const AccountsTable: FC<IAccountsTableProps> = ({
	data,
	selectedAccountId,
	setSelectedAccountId,
}) => {
	return (
		<Stack>
			<h2>Accounts</h2>
			<Table bordered hover responsive size='sm'>
				<thead>
					<tr>
						<th>№</th>
						<th>accountId</th>
						<th>email</th>
						<th>authToken</th>
						<th>creationDate</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((row, index) => (
						<tr
							className={
								row.accountId === selectedAccountId
									? 'table-row selected'
									: 'table-row'
							}
							onClick={() => setSelectedAccountId(row.accountId)}
							key={row.accountId}
						>
							<td>{index + 1}</td>
							<td>{row.accountId}</td>
							<td>{row.email}</td>
							<td>{row.authToken}</td>
							<td>{row.creationDate}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Stack>
	);
};

export default AccountsTable;
