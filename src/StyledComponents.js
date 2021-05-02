import styled from 'styled-components';
import { Link as ReactRouterDomLink } from 'react-router-dom';

// Global
export const styles = {
	spinner: {
		textAlign: 'center',
		margin: '20px',
		color: '#250d53',
	},
};

export const Center = styled.div`
	text-align: center;
`;

export const Error = styled.div`
	color: #c30;
	font-style: italic;
	width: 400px;
`;

export const SearchBar = styled.div`
	position: relative;
`;

export const Label = styled.label`
	color: #250d53;
	display: block;
	margin: 10px 0;

	font-size: ${({ size = 'medium' }) =>
		({ small: '12px', medium: '16px', large: '21px' }[size])};
`;

export const ClearSearch = styled.button`
	position: absolute;
	bottom: 8px;
	right: 10px;
	background: transparent;
	border: none;
	cursor: pointer;
`;

export const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const NavLink = styled(ReactRouterDomLink)`
	background-color: #250d53;
	border: 2px solid #250d53;
	border-radius: 5px;
	color: #fff;
	display: inline-block;
	font-weight: bold;
	padding: 10px;

	&:hover {
		background-color: #fff;
		color: #250d53;
	}

	@media (max-width: 768px) {
		order: -1;
	}
`;

export const RouterLink = styled(ReactRouterDomLink)`
	display: block;
	background-color: #501cd2;
	border-radius: 5px;
	color: #fff;
	padding: 15px 10px;

	&:hover {
		background-color: #250d53;
	}
`;

export const Input = styled.input`
	border: 2px solid #250d53;
	border-radius: 5px;
	padding: 5px 5px;
	display: block;
	width: 300px;
	font-size: 16px;

	@media (max-width: 480px) {
		width: 250px;
	}
`;

// Albums
export const Title = styled.h1`
	color: #250d52;
	text-transform: uppercase;
`;
export const AlbumsList = styled.ul`
	display: inline-block;
	list-style-type: none;
	text-align: left;
`;
export const Album = styled.li`
	margin-bottom: 15px;
`;

// Album
export const Container = styled.main`
	width: 90%;
	margin: 40px auto;
`;
export const AlbumContainer = styled.div`
	background-color: #fff;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	justify-content: space-between;
	margin: 60px 0;
	padding: 30px;
	grid-gap: 40px;
	text-align: center;
`;
export const Photograph = styled.div`
	padding: 10px;
	transition: 0.4s all;

	&:hover {
		background-color: #f6f6f6;
		transform: translateY(-6px);
	}
`;
export const Link = styled.a`
	color: #250d52;
	height: 100%;
	text-decoration: none;
`;

export const TextContainer = styled.div`
	width: 150px;
	margin: 0 auto;
`;

export const PhotoTitle = styled.h2`
	font-size: 14px;
	margin: 10px 0;
	text-align: center;
`;

export const Picture = styled.img`
	max-width: 100%;
`;
