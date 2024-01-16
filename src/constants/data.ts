import { IAccount } from "../models/IAccount";
import { IExtendedCampaign } from "../models/ICampaign";
import { IExtendedProfile } from "../models/IProfile";

export const accountsData: IAccount[] = [
  { accountId: 1, email: 'user1@example.com', authToken: 'token1', creationDate: '2022-01-01' },
  { accountId: 2, email: 'user2@example.com', authToken: 'token2', creationDate: '2022-01-02' },
  { accountId: 3, email: 'user3@example.com', authToken: 'token3', creationDate: '2022-01-03' },
  { accountId: 4, email: 'user4@example.com', authToken: 'token4', creationDate: '2022-01-04' },
  { accountId: 5, email: 'user5@example.com', authToken: 'token5', creationDate: '2022-01-05' },
  { accountId: 6, email: 'user6@example.com', authToken: 'token6', creationDate: '2022-01-06' },
  { accountId: 7, email: 'user7@example.com', authToken: 'token7', creationDate: '2022-01-07' },
  { accountId: 8, email: 'user8@example.com', authToken: 'token8', creationDate: '2022-01-08' },
  { accountId: 9, email: 'user9@example.com', authToken: 'token9', creationDate: '2022-01-09' },
  { accountId: 10, email: 'user10@example.com', authToken: 'token10', creationDate: '2022-01-10' },
  { accountId: 11, email: 'user11@example.com', authToken: 'token11', creationDate: '2022-01-11' },
  { accountId: 12, email: 'user12@example.com', authToken: 'token12', creationDate: '2022-01-12' },
];

export const profilesData: IExtendedProfile[] = [
  { profileId: 1, accountId: 1, country: 'USA', marketplace: 'Amazon' },
  { profileId: 2, accountId: 1, country: 'Canada', marketplace: 'Walmart' },
  { profileId: 3, accountId: 1, country: 'Germany', marketplace: 'Ebay' },
  { profileId: 4, accountId: 2, country: 'UK', marketplace: 'Amazon' },
  { profileId: 5, accountId: 2, country: 'France', marketplace: 'Cdiscount' },
  { profileId: 6, accountId: 2, country: 'Spain', marketplace: 'El Corte Inglés' },
  { profileId: 7, accountId: 3, country: 'Italy', marketplace: 'Zalando' },
  { profileId: 8, accountId: 3, country: 'Japan', marketplace: 'Rakuten' },
  { profileId: 9, accountId: 3, country: 'Australia', marketplace: 'eBay' },
  { profileId: 10, accountId: 4, country: 'India', marketplace: 'Flipkart' },
  { profileId: 11, accountId: 4, country: 'Brazil', marketplace: 'Mercado Livre' },
  { profileId: 12, accountId: 4, country: 'Mexico', marketplace: 'Walmart de México' },
  { profileId: 13, accountId: 5, country: 'South Korea', marketplace: 'Gmarket' },
  { profileId: 14, accountId: 5, country: 'Ukraine', marketplace: 'ATB' },
  { profileId: 15, accountId: 5, country: 'China', marketplace: 'Alibaba' },
];

export const campaignsData: IExtendedCampaign[] = [
  { campaignId: 1, profileId: 1, clicks: 100, cost: 50, date: '2022-02-01' },
  { campaignId: 2, profileId: 1, clicks: 150, cost: 75, date: '2022-02-02' },
  { campaignId: 3, profileId: 1, clicks: 120, cost: 60, date: '2022-02-03' },
  { campaignId: 4, profileId: 2, clicks: 80, cost: 40, date: '2022-02-01' },
  { campaignId: 5, profileId: 2, clicks: 110, cost: 55, date: '2022-02-02' },
  { campaignId: 6, profileId: 2, clicks: 90, cost: 45, date: '2022-02-03' },
  { campaignId: 7, profileId: 3, clicks: 70, cost: 35, date: '2022-02-01' },
  { campaignId: 8, profileId: 3, clicks: 100, cost: 50, date: '2022-02-02' },
  { campaignId: 9, profileId: 3, clicks: 80, cost: 40, date: '2022-02-03' },
  { campaignId: 10, profileId: 4, clicks: 120, cost: 60, date: '2022-02-01' },
  { campaignId: 11, profileId: 4, clicks: 130, cost: 65, date: '2022-02-02' },
  { campaignId: 12, profileId: 4, clicks: 110, cost: 55, date: '2022-02-03' },
  { campaignId: 13, profileId: 5, clicks: 90, cost: 45, date: '2022-02-01' },
  { campaignId: 14, profileId: 5, clicks: 100, cost: 50, date: '2022-02-02' },
  { campaignId: 15, profileId: 5, clicks: 80, cost: 40, date: '2022-02-03' },
  { campaignId: 16, profileId: 6, clicks: 70, cost: 35, date: '2022-02-01' },
  { campaignId: 17, profileId: 6, clicks: 120, cost: 60, date: '2022-02-02' },
  { campaignId: 18, profileId: 6, clicks: 100, cost: 50, date: '2022-02-03' },
  { campaignId: 19, profileId: 7, clicks: 110, cost: 55, date: '2022-02-01' },
  { campaignId: 20, profileId: 7, clicks: 80, cost: 40, date: '2022-02-02' },
  { campaignId: 21, profileId: 7, clicks: 90, cost: 45, date: '2022-02-03' },
  { campaignId: 22, profileId: 8, clicks: 100, cost: 50, date: '2022-02-01' },
];
