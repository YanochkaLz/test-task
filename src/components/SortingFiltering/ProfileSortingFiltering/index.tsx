import { FC, useEffect } from 'react';
import { useSortingProfiles } from './hooks/useSortingProfiles';
import { useFilteringProfiles } from './hooks/useFilteringProfiles';
import { IExtendedProfile } from '../../../models/IProfile';
import SelectComponent from '../../SelectComponent';

interface IProfileSortingProps {
	profiles: IExtendedProfile[];
	setProfiles: (profiles: IExtendedProfile[]) => void;
}

export const sortingOptions = [
	'country alphabetical decreasing',
	'country alphabetical ascending',
];
export const filteringOptions = ['Amazon', 'Not Amazon'];

const ProfileSortingFiltering: FC<IProfileSortingProps> = ({
	profiles,
	setProfiles,
}) => {
	const { sortedProfiles, handleChangeOrder, initialOrder } =
		useSortingProfiles(profiles);
	const { filteredProfiles, handleChangeFilter, filterCriteria } =
		useFilteringProfiles(profiles);

	useEffect(() => {
		if (sortedProfiles && filteredProfiles) {
			setProfiles(
				sortedProfiles.filter(element => filteredProfiles.includes(element))
			);
		}
	}, [sortedProfiles, filteredProfiles]);

	useEffect(() => {
		setProfiles(profiles);
		handleChangeOrder('---');
		handleChangeFilter('---');
	}, [profiles]);

	return (
		<>
			<div>
				Sorting
				<SelectComponent
					value={initialOrder}
					options={sortingOptions}
					onChange={handleChangeOrder}
				/>
			</div>
			<div>
				Filtering
				<SelectComponent
					value={filterCriteria}
					options={filteringOptions}
					onChange={handleChangeFilter}
				/>
			</div>
		</>
	);
};

export default ProfileSortingFiltering;
