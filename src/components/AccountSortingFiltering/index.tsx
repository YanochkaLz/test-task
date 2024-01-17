import { FC, useEffect } from 'react';
import SelectComponent from '../SelectComponent';
import { IAccount } from '../../models/IAccount';
import { useSortingAccounts } from './hooks/useSortingAccounts';
import { useFilteringAccounts } from './hooks/useFilteringAccounts';

export const sortingOptions = [
	'creation date decreasing',
	'creation date ascending',
];
export const filteringOptions = ['created in 2023', 'created in 2022 or later'];

interface IAccountSortingProps {
	setAccounts: (accounts: IAccount[]) => void;
}

const AccountSortingFiltering: FC<IAccountSortingProps> = ({ setAccounts }) => {
	const { sortedAccounts, setInitialOrder } = useSortingAccounts();
	const { filteredAccounts, setFilterCriteria } = useFilteringAccounts();

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
				<SelectComponent options={sortingOptions} onChange={setInitialOrder} />
			</div>
			<div>
				Filtering
				<SelectComponent
					options={filteringOptions}
					onChange={setFilterCriteria}
				/>
			</div>
		</>
	);
};

export default AccountSortingFiltering;
