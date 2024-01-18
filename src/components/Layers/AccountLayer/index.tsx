import { FC, useState } from 'react';
import ProfileLayer from '../ProfileLayer';
import useAccountLayer from './hooks/useAccountLayer';
import { Stack } from 'react-bootstrap';
import { IAccount } from '../../../models/IAccount';
import { PAGE_SIZE } from '../../../constants/pagination';
import AccountSortingFiltering from '../../SortingFiltering/AccountSortingFiltering';
import AccountsTable from '../../Tables/AccountsTable';
import PaginationComponent from '../../PaginationComponent';

const AccountLayer: FC = () => {
	const [accounts, setAccounts] = useState<IAccount[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { profiles, selectedAccountId, handleSelectAccountId } =
		useAccountLayer(accounts);

	const paginatedAccounts = accounts.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE
	);

	return (
		<>
			<Stack>
				<h2>Accounts</h2>
				<div className='d-flex justify-content-end flex-wrap gap-4 mb-4'>
					<AccountSortingFiltering setAccounts={setAccounts} />
				</div>
				<AccountsTable
					data={paginatedAccounts}
					selectedAccountId={selectedAccountId}
					handleSelectAccountId={handleSelectAccountId}
				/>
				<PaginationComponent
					currentPage={currentPage}
					pageCount={Math.ceil(accounts.length / PAGE_SIZE)}
					handlePageChange={setCurrentPage}
				/>
			</Stack>
			<hr />

			<ProfileLayer profiles={profiles} />
		</>
	);
};

export default AccountLayer;
