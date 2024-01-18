import { FC, useEffect } from 'react';
import { useSortingAccounts } from './hooks/useSortingAccounts';
import { useFilteringAccounts } from './hooks/useFilteringAccounts';
import { IAccount } from '../../../models/IAccount';
import SelectComponent from '../../SelectComponent';

export const sortingOptions = [
	'creation date decreasing',
	'creation date ascending',
];
export const filteringOptions = ['created in 2023', 'created in 2022 or earlier'];

interface IAccountSortingProps {
	setAccounts: (accounts: IAccount[]) => void;
}

const AccountSortingFiltering: FC<IAccountSortingProps> = ({ setAccounts }) => {
	const { sortedAccounts, setInitialOrder, initialOrder } =
		useSortingAccounts();
	const { filteredAccounts, setFilterCriteria, filterCriteria } =
		useFilteringAccounts();

	useEffect(() => {
		if (filteredAccounts && sortedAccounts) {
			setAccounts(
				sortedAccounts.filter(element => filteredAccounts.includes(element))
			);
		}
	}, [filteredAccounts, sortedAccounts]);

	return (
		<>
			<div>
				Sorting
				<SelectComponent
					value={initialOrder}
					options={sortingOptions}
					onChange={setInitialOrder}
				/>
			</div>
			<div>
				Filtering
				<SelectComponent
					value={filterCriteria}
					options={filteringOptions}
					onChange={setFilterCriteria}
				/>
			</div>
		</>
	);
};

export default AccountSortingFiltering;
