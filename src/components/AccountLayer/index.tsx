import { FC } from 'react';
import AccountsTable from '../AccountsTable';
import { accountsData } from '../../constants/data';
import ProfileLayer from '../ProfileLayer';
import useAccountLayer from './hooks/useAccountLayer';

const AccountLayer: FC = () => {
	const { profiles, selectedAccountId, handleSelectAccountId } =
		useAccountLayer();

	return (
		<>
			<AccountsTable
				data={accountsData}
				selectedAccountId={selectedAccountId}
				handleSelectAccountId={handleSelectAccountId}
			/>
			<hr />

			<ProfileLayer profiles={profiles} />
		</>
	);
};

export default AccountLayer;
