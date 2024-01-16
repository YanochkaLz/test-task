import { FC, useEffect, useState } from 'react';
import AccountsTable from './AccountsTable';
import { IExtendedProfile } from '../models/IProfile';
import { accountsData, profilesData } from '../constants/data';
import ProfileLayer from './ProfileLayer';

const AccountLayer: FC = () => {
	const [profiles, setProfiles] = useState<IExtendedProfile[]>([
		...profilesData,
	]);
	const [selectedAccountId, setSelectedAccountId] = useState<number | null>(
		accountsData[0]?.accountId || null
	);

	useEffect(() => {
		if (selectedAccountId !== null) {
			setProfiles(
				profilesData?.filter(profile => profile.accountId === selectedAccountId)
			);
		}
	}, [selectedAccountId]);


	return (
		<>
			<AccountsTable
				data={accountsData}
				selectedAccountId={selectedAccountId}
				setSelectedAccountId={setSelectedAccountId}
			/>
			<ProfileLayer profiles={profiles} />
		</>
	);
};

export default AccountLayer;
