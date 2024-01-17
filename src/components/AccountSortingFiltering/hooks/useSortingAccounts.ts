import { useEffect, useState } from 'react';
import { IAccount } from '../../../models/IAccount';
import { accountsData } from '../../../constants/data';
import { sortingOptions } from '..';

export const useSortingAccounts = () => {
	const [initialOrder, setInitialOrder] = useState<string>('---');
	const [sortedAccounts, setSortedAccounts] = useState<IAccount[]>([
		...accountsData,
	]);

	useEffect(() => {
		const sortedAccounts = [...accountsData];
		if (initialOrder === sortingOptions[0]) {
			sortedAccounts.sort(
				(a, b) =>
					new Date(b.creationDate).getTime() -
					new Date(a.creationDate).getTime()
			);
			setSortedAccounts(sortedAccounts);
		} else if (initialOrder === sortingOptions[1]) {
			sortedAccounts.sort(
				(a, b) =>
					new Date(a.creationDate).getTime() -
					new Date(b.creationDate).getTime()
			);
			setSortedAccounts(sortedAccounts);
		} else {
			setSortedAccounts(accountsData);
		}
	}, [initialOrder]);

	return { sortedAccounts, setInitialOrder };
};
