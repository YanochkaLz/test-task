import { FC } from 'react';
import { IAccount } from '../../models/IAccount';
import TableComponent from '../TableComponent';

interface IAccountsTableProps {
	data: IAccount[];
	selectedAccountId: number | null;
	handleSelectAccountId: (id: number) => void;
}

const accountHeaders = ['accountId', 'email', 'authToken', 'creationDate'];

const AccountsTable: FC<IAccountsTableProps> = ({
	data,
	selectedAccountId,
	handleSelectAccountId,
}) => {
	return (
		<TableComponent headers={accountHeaders}>
			{data?.map(row => (
				<tr
					className={
						row.accountId === selectedAccountId
							? 'table-row selected'
							: 'table-row'
					}
					onClick={() => handleSelectAccountId(row.accountId)}
					key={row.accountId}
				>
					<td>{row.accountId}</td>
					<td>{row.email}</td>
					<td>{row.authToken}</td>
					<td>{row.creationDate}</td>
				</tr>
			))}
		</TableComponent>
	);
};

export default AccountsTable;
