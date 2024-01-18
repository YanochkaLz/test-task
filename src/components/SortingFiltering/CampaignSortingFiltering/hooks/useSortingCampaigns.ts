import { useState } from 'react';
import { sortingOptions } from '..';
import { IExtendedCampaign } from '../../../../models/ICampaign';

export const useSortingCampaigns = (campaigns: IExtendedCampaign[]) => {
	const [initialOrder, setInitialOrder] = useState<string>('---');
	const [sortedCampaigns, setSortedCampaigns] = useState<
		IExtendedCampaign[]
	>([...campaigns]);

	const handleChangeOrder = (order: string) => {
		setInitialOrder(order);
		const copyProfiles = [...campaigns];
		if (initialOrder === sortingOptions[0]) {
			copyProfiles.sort(
				(a, b) =>
					new Date(b.date).getTime() -
					new Date(a.date).getTime()
			);
			setSortedCampaigns(copyProfiles);
		} else if (initialOrder === sortingOptions[1]) {
			copyProfiles.sort(
				(a, b) =>
					new Date(a.date).getTime() -
					new Date(b.date).getTime()
			);
			setSortedCampaigns(copyProfiles);
		} else {
			setSortedCampaigns(copyProfiles);
		}
	};

	return { sortedCampaigns, handleChangeOrder, initialOrder };
};
