export interface ICampaign {
	campaignId: number;
	clicks: number;
	cost: number;
	date: string;
}

export interface IExtendedCampaign extends ICampaign {
	profileId: number;
}