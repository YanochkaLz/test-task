import { FC, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { PAGE_SIZE } from '../../../constants/pagination';
import { IExtendedCampaign } from '../../../models/ICampaign';
import CampaignsTable from '../../Tables/CampaignsTable';
import PaginationComponent from '../../PaginationComponent';
import CampaignSortingFiltering from '../../SortingFiltering/CampaignSortingFiltering';


interface ICampaignLayerProps {
	campaigns: IExtendedCampaign[];
}

const CampaignLayer: FC<ICampaignLayerProps> = ({ campaigns }) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [currentCampaigns, setCurrentCampaigns] = useState<IExtendedCampaign[]>(
		[]
	);

	const paginatedProfiles = currentCampaigns.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE
	);

	useEffect(() => {
		setCurrentPage(1);
	}, [currentCampaigns]);

	return (
		<Stack>
			<h2 id='campaigns'>Campaigns</h2>

			<div className='d-flex justify-content-end flex-wrap gap-4 mb-4'>
				<CampaignSortingFiltering
					campaigns={campaigns}
					setCampaigns={setCurrentCampaigns}
				/>
			</div>

			<CampaignsTable data={paginatedProfiles} />

			<PaginationComponent
				currentPage={currentPage}
				pageCount={Math.ceil(currentCampaigns.length / PAGE_SIZE)}
				handlePageChange={setCurrentPage}
			/>
		</Stack>
	);
};

export default CampaignLayer;
