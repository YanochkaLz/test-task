import { Stack } from 'react-bootstrap';
import AccountLayer from './components/AccountLayer';

function App() {

	return (
		<Stack className='px-5 py-4'>
			<h1 className='text-center'>Tables</h1>
			<hr />
			<div className='d-flex justify-content-center flex-wrap gap-5 mt-3'>
				<AccountLayer/>
			</div>
		</Stack>
	);
}

export default App;
