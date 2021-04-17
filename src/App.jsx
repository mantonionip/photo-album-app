import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AlbumsProvider } from './context/albums';
import Albums from './components/Albums';
import Album from './components/Album';
import { Container } from './StyledComponents';

// Code that observes between each component change and the time the analyze starts
// This only runs in the development environment
const React = require('react');
const ReactDOM = require('react-dom');

if (process.env.NODE_ENV !== 'production') {
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

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
