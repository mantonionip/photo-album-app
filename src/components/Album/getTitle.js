// Give a photo title and a user search (search by title),
// returns that same title, highlighting (using <em>) the parts
// of the title that match with the search
// If no search is provided, returns the same title
// The title is returned inside of an object as a __html attribute
// so it could be rendered in any component without scaping the HTML
const getTitle = (title, search) => {
	if (search) {
		title = title.replace(
			new RegExp(`\\w*${search}\\w*`, 'g'),
			(match) => `<em style="color: red">${match}</em>`
		);
	}

	return {
		__html: title,
	};
};

export default getTitle;
