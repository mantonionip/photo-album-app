import React, { useState, useEffect, createContext } from 'react';
import API from '../api';

// Context for albums collection; exports by default
const AlbumsContext = createContext();
export default AlbumsContext;

const userId = 1;

// Wrapper Context Component Provider
export const AlbumsProvider = (props) => {
	// Album state
	const [albums, setAlbums] = useState([]);

	// Get all albums
	// useEffect with [] (empty dependencies); works as older "componentDidMount"
	useEffect(() => {
		fetch(API.albums(userId))
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setAlbums(res);
			});
	}, []);

	// Pass context to children components
	return (
		<AlbumsContext.Provider value={{ albums }}>
			{/* Renders components inside */}
			{props.children}
		</AlbumsContext.Provider>
	);
};
