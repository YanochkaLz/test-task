import { useEffect, useState } from 'react';
import { IExtendedProfile } from '../../../models/IProfile';
import { accountsData, profilesData } from '../../../constants/data';

const useAccountLayer = () => {
	const [profiles, setProfiles] = useState<IExtendedProfile[]>([
		...profilesData,
	]);
	const [selectedAccountId, setSelectedAccountId] = useState<number | null>(
		accountsData[0]?.accountId || null
	);

	const filterProfilesByAccountId = (accountId: number): IExtendedProfile[] => {
		return profilesData.filter(profile => profile.accountId === accountId);
	};

	const scrollToProfiles = () => {
		const profilesElement = document.getElementById('profiles');
		if (profilesElement) {
			profilesElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	const handleSelectAccountId = (id: number) => {
		setSelectedAccountId(id);
		scrollToProfiles();
	};

	useEffect(() => {
		if (selectedAccountId !== null) {
			setProfiles(filterProfilesByAccountId(selectedAccountId));
		}
	}, [selectedAccountId]);

	return { profiles, selectedAccountId, handleSelectAccountId };
};

export default useAccountLayer;
