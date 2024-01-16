import { FC } from 'react';
import { Table, Stack } from 'react-bootstrap';
import { IExtendedCampaign } from '../../models/ICampaign';

interface ICampaignsTableProps {
	data: IExtendedCampaign[];
}

const CampaignsTable: FC<ICampaignsTableProps> = ({ data }) => {
	return (
		<Stack>
			<h2>Campaigns</h2>
			<Table bordered hover responsive size='sm'>
				<thead>
					<tr>
						<th>№</th>
						<th>campaignId</th>
						<th>clicks</th>
						<th>cost</th>
						<th>date</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((row, index) => (
						<tr className='table-row' key={row.campaignId}>
							<td>{index + 1}</td>
							<td>{row.campaignId}</td>
							<td>{row.clicks}</td>
							<td>{row.cost}</td>
							<td>{row.date}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Stack>
	);
};

export default CampaignsTable;
