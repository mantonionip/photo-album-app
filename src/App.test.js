import { render, screen, fireEvent } from '@testing-library/react';

// Components
import AlbumContainer from './components/Album';
import Album from './components/Album/Album';

import AlbumsContainer from './components/Albums';
import Albums from './components/Albums/Albums';

// Wrappers
import { AlbumsProvider } from './context/albums';
import { BrowserRouter } from 'react-router-dom';

// Mocks
import { albums, photos } from './test/mocks';

test('renders Albums', () => {
	render(
		<AlbumsProvider>
			<AlbumsContainer />
		</AlbumsProvider>
	);

	const titleElement = screen.getByText(/Photo Galleries:/i);
	expect(titleElement).toBeInTheDocument();
});

test('There are 10 albums', () => {
	const { container } = render(
		<BrowserRouter>
			<Albums albums={albums} />
		</BrowserRouter>
	);

	const lis = container.querySelectorAll('li');
	expect(lis.length).toBe(10);
});

test('There are 50 photos', () => {
	const { container } = render(<Album album={photos[1]} search={''} />);

	const img = container.querySelectorAll('img');
	expect(img.length).toBe(50);
});

test('Filters photos', () => {
	const { container } = render(<Album album={photos[1]} search={'accu'} />);

	const img = container.querySelectorAll('img');
	expect(img.length).toBe(2);
	expect(
		screen.getByText('ea aliquid et amet sequi nemo')
	).toBeInTheDocument();
});
