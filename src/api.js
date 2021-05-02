// API endpoints
const API = {
	albums: (userId) =>
		`https://jsonplaceholder.typicode.com/users/${userId}/albums`,
	photos: (albumId) =>
		`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
};

export default API;
