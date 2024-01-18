import { FC } from 'react';
import { IExtendedCampaign } from '../../../models/ICampaign';
import TableComponent from '../TableComponent';

interface ICampaignsTableProps {
	data: IExtendedCampaign[];
}

const campaignHeaders = ['campaignId', 'clicks', 'cost', 'date'];

const CampaignsTable: FC<ICampaignsTableProps> = ({ data }) => {
	return (
		<TableComponent headers={campaignHeaders}>
			{data?.map(row => (
				<tr className='table-row' key={row.campaignId}>
					<td>{row.campaignId}</td>
					<td>{row.clicks}</td>
					<td>{row.cost}</td>
					<td>{row.date}</td>
				</tr>
			))}
		</TableComponent>
	);
};

export default CampaignsTable;
