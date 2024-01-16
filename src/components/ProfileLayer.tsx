import { FC, useState, useEffect } from 'react';
import ProfilesTable from './ProfilesTable';
import { IExtendedProfile } from '../models/IProfile';
import CampaignsTable from './CampaignsTable';
import { campaignsData } from '../constants/data';
import { IExtendedCampaign } from '../models/ICampaign';

interface IProfileLayerProps {
	profiles: IExtendedProfile[];
}

const ProfileLayer: FC<IProfileLayerProps> = ({ profiles }) => {
	const [selectedProfileId, setSelectedProfileId] = useState<number | null>(
		profiles[0]?.profileId || null
	);

	const [campaigns, setCampaigns] = useState<IExtendedCampaign[]>([
		...campaignsData,
	]);

	useEffect(() => {
		if (selectedProfileId !== null) {
			setCampaigns(
				campaignsData?.filter(
					profile => profile.profileId === selectedProfileId
				)
			);
		}
	}, [selectedProfileId]);

	useEffect(() => {
		if (profiles?.length > 0) {
			setSelectedProfileId(profiles[0].profileId);
		} else {
			setCampaigns([]);
		}
	}, [profiles]);


	return (
		<>
			<ProfilesTable
				data={profiles}
				selectedProfileId={selectedProfileId}
				setSelectedProfileId={setSelectedProfileId}
			/>
			<CampaignsTable data={campaigns} />
		</>
	);
};

export default ProfileLayer;
