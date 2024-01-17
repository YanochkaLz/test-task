import { Stack } from 'react-bootstrap';
import AccountLayer from './components/AccountLayer';

function App() {
	return (
		<Stack className='px-5 py-4 container'>
			<h1 className='text-center'>Tables</h1>
			<hr />
			<div style={{paddingBottom: '150px'}} className='d-flex justify-content-center flex-wrap flex-column gap-5 mt-3'>
				<AccountLayer />
			</div>
		</Stack>
	);
}

export default App;
