import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AlbumsProvider } from './context/albums';
import Albums from './components/Albums';
import Album from './components/Album';
import { Container } from './StyledComponents';

// Main wrapper component
function App() {
	return (
		// Routing feature for handling "/" and "/album/:albumId" paths
		<BrowserRouter>
			{/* Album list provider; provides with albums collection */}
			<AlbumsProvider>
				{/* Main div container */}
				<Container>
					{/* Router Switch */}
					<Switch>
						{/* Home Page */}
						<Route path="/" exact component={Albums} />

						{/* Album Page */}
						<Route path="/album/:albumId" component={Album}></Route>
					</Switch>
				</Container>
			</AlbumsProvider>
		</BrowserRouter>
	);
}

export default App;
