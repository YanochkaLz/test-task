import { FC } from 'react';
import { Pagination } from 'react-bootstrap';

import './styles.scss';

interface IPaginationComponentProps {
	currentPage: number;
	pageCount: number;
	handlePageChange: (pageNumber: number) => void;
}

const PaginationComponent: FC<IPaginationComponentProps> = ({
	currentPage,
	pageCount,
	handlePageChange,
}) => {
	let items = [];

	for (let number = 1; number <= pageCount; number++) {
		items.push(
			<Pagination.Item
				key={number}
				active={number === currentPage}
				onClick={() => handlePageChange(number)}
			>
				{number}
			</Pagination.Item>
		);
	}

	return <Pagination className='pagination-block'>{items}</Pagination>;
};

export default PaginationComponent;
