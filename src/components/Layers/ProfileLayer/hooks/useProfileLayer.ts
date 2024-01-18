import { useEffect, useState } from 'react';
import { IExtendedProfile } from '../../../../models/IProfile';
import { IExtendedCampaign } from '../../../../models/ICampaign';
import { campaignsData } from '../../../../constants/data';

const useProfileLayer = (profiles: IExtendedProfile[]) => {
	const [selectedProfileId, setSelectedProfileId] = useState<number | null>(
		profiles[0]?.profileId || null
	);

	const [campaigns, setCampaigns] = useState<IExtendedCampaign[]>([
		...campaignsData,
	]);

	const filterCampaignsByProfileId = (
		selectedProfileId: number
	): IExtendedCampaign[] => {
		return campaignsData?.filter(
			profile => profile.profileId === selectedProfileId
		);
	};

	const scrollToCampaigns = () => {
		const campaignsElement = document.getElementById('campaigns');
		if (campaignsElement) {
			campaignsElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};
	const handleSelectProfileId = (id: number) => {
		setSelectedProfileId(id);
		scrollToCampaigns();
	};

	useEffect(() => {
		if (profiles?.length > 0) {
			const initialProfileId = profiles[0].profileId;
			setSelectedProfileId(initialProfileId);
			setCampaigns(filterCampaignsByProfileId(initialProfileId));
		} else {
			setCampaigns([]);
		}
	}, [profiles]);

	useEffect(() => {
		if (selectedProfileId !== null) {
			setCampaigns(filterCampaignsByProfileId(selectedProfileId));
		}
	}, [selectedProfileId]);

	return { selectedProfileId, handleSelectProfileId, campaigns };
};

export default useProfileLayer;
