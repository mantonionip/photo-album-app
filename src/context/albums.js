import React, { useState, useEffect } from 'react';

// API endpoints
const API = {
	albums: (userId) =>
		`https://jsonplaceholder.typicode.com/users/${userId}/albums`,
	photos: (albumId) =>
		`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
};

// Context for albums collection; exports by default
const AlbumsContext = React.createContext();
export default AlbumsContext;

// Wrapper Context Component Provider
export const AlbumsProvider = (props) => {
	// Album state
	const [albums, setAlbums] = useState([]);

	// Get all albums
	// useEffect with [] (empty dependencies); works as older "componentDidMount"
	useEffect(() => {
		fetch(API.albums(1))
			.then((res) => {
				// console.log({ res });
				return res.json();
			})
			.then((res) => {
				// console.log({ resBody: res });
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

// Used for saving each requested album, avoiding unnecessary calls
const albums = {};
// Hook; not using context really
export const useAlbum = (albumId) => {
	// Album state containing album photos; default reads from memory (if previously saved)
	const [album, setAlbum] = useState(albums[albumId] || []);

	// Get album photographs
	useEffect(() => {
		// Album already saved in memory! Don't need to get it again
		if (albums[albumId]) return;

		fetch(API.photos(albumId))
			.then((res) => res.json())
			.then((album) => {
				// Updates state with album
				setAlbum(album);
				// console.log({ album });
				// Saves in memory to avoid multiple calls with the same request
				albums[albumId] = album;
			});
	}, [albumId]);

	return album;
};
