import { FC, useEffect, useState } from 'react';
import useProfileLayer from './hooks/useProfileLayer';
import { Stack } from 'react-bootstrap';
import CampaignLayer from '../CampaignLayer';
import { IExtendedProfile } from '../../../models/IProfile';
import { PAGE_SIZE } from '../../../constants/pagination';
import ProfileSortingFiltering from '../../SortingFiltering/ProfileSortingFiltering';
import ProfilesTable from '../../Tables/ProfilesTable';
import PaginationComponent from '../../PaginationComponent';

interface IProfileLayerProps {
	profiles: IExtendedProfile[];
}

const ProfileLayer: FC<IProfileLayerProps> = ({ profiles }) => {
	const [currentPage, setCurrentPage] = useState<number>(1);

	const [currentProfiles, setCurrentProfiles] = useState<IExtendedProfile[]>(
		[]
	);

	const { campaigns, selectedProfileId, handleSelectProfileId } =
		useProfileLayer(currentProfiles);

	const paginatedProfiles = currentProfiles.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE
	);

	useEffect(() => {
		setCurrentPage(1);
	}, [currentProfiles]);



	return (
		<>
			<Stack>
				<h2 id='profiles'>Profiles</h2>
				<div className='d-flex justify-content-end flex-wrap gap-4 mb-4'>
					<ProfileSortingFiltering
						profiles={profiles}
						setProfiles={setCurrentProfiles}
					/>
				</div>
				<ProfilesTable
					data={paginatedProfiles}
					selectedProfileId={selectedProfileId}
					handleSelectProfileId={handleSelectProfileId}
				/>
				<PaginationComponent
					currentPage={currentPage}
					pageCount={Math.ceil(currentProfiles.length / PAGE_SIZE)}
					handlePageChange={setCurrentPage}
				/>
			</Stack>
			<hr />
			<CampaignLayer campaigns={campaigns} />
		</>
	);
};

export default ProfileLayer;
