import { useState } from 'react';
import { IExtendedCampaign } from '../../../../models/ICampaign';
import { filteringOptions } from '..';

export const useFilteringCampaigns = (campaigns: IExtendedCampaign[]) => {
	const [filterCriteria, setFilterCriteria] = useState<string>('---');
	const [filteredCampaigns, setFilteredCampaigns] = useState<
		IExtendedCampaign[]
	>([...campaigns]);

	const handleChangeFilter = (filter: string) => {
		setFilterCriteria(filter);
		if (filter === filteringOptions[0]) {
			const filtered = campaigns.filter(campaign => campaign.cost <= 50);
			setFilteredCampaigns(filtered);
		} else if (filter === filteringOptions[1]) {
			const filtered = campaigns.filter(campaign => campaign.cost > 50);
			setFilteredCampaigns(filtered);
		} else {
			setFilteredCampaigns(campaigns);
		}
	};

	return {
		filteredCampaigns,
		handleChangeFilter,
		filterCriteria,
	};
};
