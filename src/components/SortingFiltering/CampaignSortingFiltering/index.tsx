import { FC, useEffect } from 'react';
import SelectComponent from '../../SelectComponent';
import { IExtendedCampaign } from '../../../models/ICampaign';
import { useSortingCampaigns } from './hooks/useSortingCampaigns';
import { useFilteringCampaigns } from './hooks/useFilteringCampaigns';

interface ICampaignSortingProps {
	campaigns: IExtendedCampaign[];
	setCampaigns: (profiles: IExtendedCampaign[]) => void;
}

export const sortingOptions = [
	'creation date decreasing',
	'creation date ascending',
];
export const filteringOptions = ['cost <= 50', 'cost > 50'];

const CampaignSortingFiltering: FC<ICampaignSortingProps> = ({
	campaigns,
	setCampaigns,
}) => {
	const { handleChangeOrder, initialOrder, sortedCampaigns } =
		useSortingCampaigns(campaigns);
	const { filterCriteria, handleChangeFilter, filteredCampaigns } =
		useFilteringCampaigns(campaigns);

	useEffect(() => {
		setCampaigns(campaigns);
		handleChangeOrder('---');
		handleChangeFilter('---');
	}, [campaigns]);

	useEffect(() => {
		if (sortedCampaigns && filteredCampaigns) {
			setCampaigns(
				sortedCampaigns.filter(element => filteredCampaigns.includes(element))
			);
		}
	}, [sortedCampaigns, filteredCampaigns]);

	return (
		<>
			<div>
				Sorting
				<SelectComponent
					value={initialOrder}
					options={sortingOptions}
					onChange={handleChangeOrder}
				/>
			</div>
			<div>
				Filtering
				<SelectComponent
					value={filterCriteria}
					options={filteringOptions}
					onChange={handleChangeFilter}
				/>
			</div>
		</>
	);
};

export default CampaignSortingFiltering;
