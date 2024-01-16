import { FC } from 'react';
import { Table, Stack } from 'react-bootstrap';

import { IExtendedProfile } from '../../models/IProfile';


interface IProfilesTableProps {
	data: IExtendedProfile[];
	selectedProfileId: number | null;
	setSelectedProfileId: (id: number) => void;
}

const ProfilesTable: FC<IProfilesTableProps> = ({
	data,
	selectedProfileId,
	setSelectedProfileId,
}) => {
	return (
		<Stack>
			<h2>Profiles</h2>
			<Table bordered hover responsive size='sm'>
				<thead>
					<tr>
						<th>№</th>
						<th>profileId</th>
						<th>country</th>
						<th>marketplace</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((row, index) => (
						<tr
							className={
								row.profileId === selectedProfileId
									? 'table-row selected'
									: 'table-row'
							}
							onClick={() => setSelectedProfileId(row.profileId)}
							key={row.profileId}
						>
							<td>{index + 1}</td>
							<td>{row.profileId}</td>
							<td>{row.country}</td>
							<td>{row.marketplace}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Stack>
	);
};

export default ProfilesTable;
