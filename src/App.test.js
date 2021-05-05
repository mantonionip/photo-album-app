import { render, screen } from '@testing-library/react';

// Components
import Album from './components/Album/Album';

import AlbumsContainer from './components/Albums';
import Albums from './components/Albums/Albums';

// Wrappers
import { AlbumsProvider } from './context/AlbumsContext';
import { BrowserRouter } from 'react-router-dom';

// Mocks
import { albums, photos } from './test/mocks';

test('renders Albums', () => {
	// First, render Albums container wrapping it with the Albums Provider (so it can read the albums)
	render(
		<AlbumsProvider>
			<AlbumsContainer />
		</AlbumsProvider>
	);

	// Search for Photo Galleries text in the page
	const titleElement = screen.getByText(/Photo Galleries:/i);
	// Photo Galleries text is expected to show up to tell if AlbumsContainer has been rendered
	expect(titleElement).toBeInTheDocument();
});

test(`There are ${albums.length} albums`, () => {
	// Render Albums with mock data and saves the component into the container variable
	const { container } = render(
		<BrowserRouter>
			<Albums albums={albums} />
		</BrowserRouter>
	);

	// Get all the <li> inside <Albums />
	const lis = container.querySelectorAll('li');

	// There should be as many <li> as albums in albums
	expect(lis.length).toBe(albums.length);
});

test(`There are ${photos[1].length} photos`, () => {
	const { container } = render(<Album album={photos[1]} search={''} />);

	const img = container.querySelectorAll('img');

	// There should be as many <img> elements as photos in photos[1]
	expect(img.length).toBe(photos[1].length);
});

test('Filters photos', () => {
	// Renders album with photos and a search equal to "accu"
	const { container } = render(<Album album={photos[1]} search={'accu'} />);

	// Given the photos in photos[1] and that search, we expect to get 2 elements/matches
	const img = container.querySelectorAll('img');
	expect(img.length).toBe(2);

	// There is a photo that matches the search and has this search; should find it
	expect(
		screen.getByText('ea aliquid et amet sequi nemo')
	).toBeInTheDocument();
});
