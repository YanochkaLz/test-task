import { FC } from 'react';
import ProfilesTable from '../ProfilesTable';
import { IExtendedProfile } from '../../models/IProfile';
import CampaignsTable from '../CampaignsTable';
import useProfileLayer from './hooks/useProfileLayer';

interface IProfileLayerProps {
	profiles: IExtendedProfile[];
}

const ProfileLayer: FC<IProfileLayerProps> = ({ profiles }) => {
	const { campaigns, selectedProfileId, handleSelectProfileId } =
		useProfileLayer(profiles);

	return (
		<>
			<ProfilesTable
				data={profiles}
				selectedProfileId={selectedProfileId}
				handleSelectProfileId={handleSelectProfileId}
			/>
			<hr />

			<CampaignsTable data={campaigns} />
		</>
	);
};

export default ProfileLayer;
