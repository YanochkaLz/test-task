import { FC } from 'react';
import { Stack } from 'react-bootstrap';
import { IExtendedCampaign } from '../../models/ICampaign';
import TableComponent from '../TableComponent';

interface ICampaignsTableProps {
	data: IExtendedCampaign[];
}

const campaignHeaders = ['campaignId', 'clicks', 'cost', 'date'];

const CampaignsTable: FC<ICampaignsTableProps> = ({ data }) => {
	return (
		<Stack>
			<h2 id='campaigns'>Campaigns</h2>
			<TableComponent headers={campaignHeaders}>
				{data?.map((row, index) => (
					<tr className='table-row' key={row.campaignId}>
						<td>{index + 1}</td>
						<td>{row.campaignId}</td>
						<td>{row.clicks}</td>
						<td>{row.cost}</td>
						<td>{row.date}</td>
					</tr>
				))}
			</TableComponent>
		</Stack>
	);
};

export default CampaignsTable;
