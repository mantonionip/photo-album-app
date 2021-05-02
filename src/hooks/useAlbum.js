import { useState, useEffect } from 'react';
import API from '../api';

// Used for saving each requested album, avoiding unnecessary calls
const albums = {};

const useAlbum = (albumId) => {
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
				// Saves in memory to avoid multiple calls with the same request
				albums[albumId] = album;
			});
		// passing a second argument, an array [], to change the behaviour of useEffect to ensure the contents of useEffect function only run on component mounted and not on any updates.
		// the albumId in the array is DEPENDENCY VALUE - Some operation you only want to happen when albumId updates
		// Don't wanna run useEffect anything at all updates in this component (Only when albumId changes)
	}, [albumId]);

	return album;
};

export default useAlbum;
