export interface IProfile {
	profileId: number;
	country: string;
	marketplace: string;
}

export interface IExtendedProfile extends IProfile {
	accountId: number;
}
