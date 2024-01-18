import { useState } from 'react';
import { filteringOptions } from '..';
import { IExtendedProfile } from '../../../../models/IProfile';

export const useFilteringProfiles = (profiles: IExtendedProfile[]) => {
	const [filterCriteria, setFilterCriteria] = useState<string>('---');
	const [filteredProfiles, setFilteredProfiles] = useState<IExtendedProfile[]>([
		...profiles,
	]);

	const handleChangeFilter = (filter: string) => {
		setFilterCriteria(filter);
		if (filter === filteringOptions[0]) {
			setFilteredProfiles(
				profiles.filter(profile => profile.marketplace === 'Amazon')
			);
		} else if (filter === filteringOptions[1]) {
			setFilteredProfiles(
				profiles.filter(profile => profile.marketplace !== 'Amazon')
			);
		} else {
			setFilteredProfiles(profiles);
		}
	};

	return {
		filteredProfiles,
		handleChangeFilter,
		filterCriteria,
	};
};
