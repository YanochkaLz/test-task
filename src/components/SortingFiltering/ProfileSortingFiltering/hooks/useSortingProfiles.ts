import { useState } from 'react';
import { sortingOptions } from '..';
import { IExtendedProfile } from '../../../../models/IProfile';

export const useSortingProfiles = (profiles: IExtendedProfile[]) => {
	const [initialOrder, setInitialOrder] = useState<string>('---');
	const [sortedProfiles, setSortedProfiles] = useState<IExtendedProfile[]>([
		...profiles,
	]);

	const handleChangeOrder = (order: string) => {
		setInitialOrder(order);
		const copyProfiles = [...profiles];
		if (order === sortingOptions[0]) {
			copyProfiles.sort((a, b) => a.country.localeCompare(b.country));
			setSortedProfiles(copyProfiles);
		} else if (order === sortingOptions[1]) {
			copyProfiles.sort((a, b) => b.country.localeCompare(a.country));
			setSortedProfiles(copyProfiles);
		} else {
			setSortedProfiles(profiles);
		}
	};

	return { sortedProfiles, handleChangeOrder, initialOrder };
};
