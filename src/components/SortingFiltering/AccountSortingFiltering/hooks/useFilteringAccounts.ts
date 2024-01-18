import { useEffect, useState } from 'react';
import { filteringOptions } from '..';
import { accountsData } from '../../../../constants/data';
import { IAccount } from '../../../../models/IAccount';

export const useFilteringAccounts = () => {
	const [filterCriteria, setFilterCriteria] = useState<string>('---');
	const [filteredAccounts, setFilteredAccounts] = useState<IAccount[]>([
		...accountsData,
	]);

	useEffect(() => {
		const filteredAccounts = [...accountsData];
		if (filterCriteria === filteringOptions[0]) {
			setFilteredAccounts(
				filteredAccounts.filter(account =>
					account.creationDate.includes('2023')
				)
			);
		} else if (filterCriteria === filteringOptions[1]) {
			setFilteredAccounts(
				filteredAccounts.filter(
					account => parseInt(account.creationDate.substring(0, 4)) <= 2022
				)
			);
		} else {
			setFilteredAccounts(accountsData);
		}
	}, [filterCriteria]);

	return { filteredAccounts, setFilterCriteria };
};
