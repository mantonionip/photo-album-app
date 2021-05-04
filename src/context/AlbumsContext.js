import React, { useState, useEffect, createContext } from 'react';
import API from '../api';

// to avoid PROPS DRILLING in order to pass data around in our app:
// One solution is to use REACT CONTEXT which solves this problem...
// ... by allowing us to share values through the component tree to any component that asks for those values.

// CONTEXT is a solution to a COMMON PAIN POINT in React;
// CONTEXT provides a way to pass data through the COMPONENT TREE without having to pass props down manually at every level.
// CONTEXT provides a solution - It gives us a way of sharing data from ONE HIGHER LEVEL COMPONENT to other CHILD COMPONENTS further down the tree without having to manually pass props at every single level.
// Context for albums collection; exports by default - Defines a new Context - Context is an OBJECT
// React.createContext returns an object with 2 values; Provider & Consumer
// Create React Context and make it available to other files in order to consume
const AlbumsContext = createContext();
export default AlbumsContext;

const userId = 1;

// Wrapper Context Component Provider
export const AlbumsProvider = (props) => {
	// Album state
	const [albums, setAlbums] = useState([]);

	// Get all album

	useEffect(() => {
		fetch(API.albums(userId))
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setAlbums(res);
			});
		// useEffect runs anytime there's a re-render and we're getting data inside of FETCH API call - We request albums and update the value of albums
		// And then that triggers a re-render - because albums changes even if the albums doesn't seem to change, it's the same array every time, useEffect is going to run again cuz something changed in the state.
		// We can fix this very easily by passing in a 2nd argument [] at the end, and this argument takes a FORM OF AN ARRAY and we can pass in to this array any number of pieces of data in the state that if they change useEffect should run. If anything else changes, useEffect SHOULD NOT RUN.
		// useEffect with [] (empty dependencies); works as older "componentDidMount"
		// [] prevents useEffect from running on every render - if removed, it renders countless times
		// [] ensures that the content of our effect function only run on component mounted and not on any updates
	}, []);

	// In order to provide values to our child components from a parent component with REACT CONTEXT, we need to setup a PROVIDER.
	// Pass context to children components
	return (
		// Every CONTEXT object comes with a Provider React component that allows consuming components to subscribe to CONTEXT CHANGES!
		// a value prop to be passed to consuming components that are descendants of this Provider
		// We need to decide what values we want to provide to our child components - We do that with the help of a value attribute
		// The value we pass down is "albums"
		// one Provider can be connected to many consumers.
		// in the Provider we need to pass a very important PROP and it's called VALUE
		// VALUE will be passed down to and if the CONSUMING COMPONENTS - any of the descendants of this PROVIDER - any of the CHILDREN that end up inside of PROVIDER ---> {props.children}
		// EVERY TIME YOU RUN createContext, you GET A PROVIDER FOR FREE
		<AlbumsContext.Provider value={{ albums }}>
			{/* Renders components inside */}
			{props.children}
		</AlbumsContext.Provider>
	);
};
