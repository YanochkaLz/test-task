import { useEffect, useState } from 'react';
import { IExtendedProfile } from '../../../models/IProfile';
import { profilesData } from '../../../constants/data';
import { IAccount } from '../../../models/IAccount';

const useAccountLayer = (accounts: IAccount[]) => {
	const [profiles, setProfiles] = useState<IExtendedProfile[]>([
		...profilesData,
	]);
	const [selectedAccountId, setSelectedAccountId] = useState<number | null>(
		accounts[0]?.accountId || null
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

	useEffect(() => {
		if (accounts?.length > 0) {
			setSelectedAccountId(accounts[0].accountId);
		} else {
			setProfiles([]);
		}
	}, [accounts])

	return { profiles, selectedAccountId, handleSelectAccountId };
};

export default useAccountLayer;
