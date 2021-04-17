import {
	AlbumContainer,
	Photograph,
	Link,
	Picture,
	PhotoTitle,
	TextContainer,
	Error,
} from '../../StyledComponents';
import getTitle from './getTitle';

const Album = ({ album, search }) => {
	// Ignore the elements that don't match the user search
	const filteredAlbum = album.filter(({ title }) => title.includes(search));

	return (
		<AlbumContainer>
			{/* If user searched and there is no photos, show an error message */}
			{!!album.length && !filteredAlbum.length && (
				<Error>Ooops..., there's no match with your search!</Error>
			)}

			{/* Checks for filteredAlbum.length before */}
			{!!filteredAlbum.length &&
				filteredAlbum.map(({ id, title, url, thumbnailUrl }) => (
					<Photograph key={id}>
						<Link target="_blank" href={url}>
							<Picture
								src={thumbnailUrl}
								alt="An amazing colorful photo"
							/>
							{/* dangerouslySetInnerHTML is used because of the tags (<em></em>) inside of the parsed title */}
							<TextContainer>
								<PhotoTitle
									dangerouslySetInnerHTML={getTitle(
										title,
										search
									)}
								/>
							</TextContainer>
						</Link>
					</Photograph>
				))}
		</AlbumContainer>
	);
};

export default Album;
