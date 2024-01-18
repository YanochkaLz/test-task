import { FC } from 'react';
import { IExtendedProfile } from '../../../models/IProfile';
import TableComponent from '../TableComponent';

interface IProfilesTableProps {
	data: IExtendedProfile[];
	selectedProfileId: number | null;
	handleSelectProfileId: (id: number) => void;
}

const profileHeaders = ['profileId', 'country', 'marketplace'];

const ProfilesTable: FC<IProfilesTableProps> = ({
	data,
	selectedProfileId,
	handleSelectProfileId,
}) => {
	return (
		<TableComponent headers={profileHeaders}>
			{data?.map(row => (
				<tr
					className={
						row.profileId === selectedProfileId
							? 'table-row selected'
							: 'table-row'
					}
					onClick={() => handleSelectProfileId(row.profileId)}
					key={row.profileId}
				>
					<td>{row.profileId}</td>
					<td>{row.country}</td>
					<td>{row.marketplace}</td>
				</tr>
			))}
		</TableComponent>
	);
};

export default ProfilesTable;
