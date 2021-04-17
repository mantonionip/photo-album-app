[Live Demo](https://my-photo-app.netlify.app/)

## Albums Context

Inside of ./src/context/albums.js you can find 3 exports:

-   AlbumsContext (default), containing a React Context object for the albums list
-   AlbumsProvider, a container component that provides with the albums context
-   useAlbum, a hook that, given an album ID, provides the photographs of that specific album

API endpoints used for getting albums collection and album pictures:

-   https://jsonplaceholder.typicode.com/users/${userId}/albums
-   https://jsonplaceholder.typicode.com/albums/${albumId}/photos

## Components

-   ### App

Contains the whole application
Wraps everything using React Router Dom and the albums context provider

-   ### Albums

Given an AlbumContext, shows a list of albums with links to /album/:albumId

-   ### Album

Given an album array (of photographs), shows a list of photos using a grid layout

-   ### Spinner

Shows a circle spinner on home page while albums collection load and on album page while photographs are loading

## Styled components

The application uses styled components ([https://styled-components.com/](https://styled-components.com/)) to style every element on the website. You can find the styles in ./src/StyledComponents.js. Some other global styles are added in ./src/index.css as well

## Accessibility (a11y):

After deploying on Netlify, used Lighthouse to check the performance, accessibility, best practices, and SEO of the app and all gained green number of 100.

Also during the development used the axe-core ([https://www.npmjs.com/package/@axe-core/react](https://www.npmjs.com/package/@axe-core/react)) accessibility library to check whether the jsx codes are accessible. Results are shown in the browser DevTools console every time a component updates.

## Available Scripts

In the project directory, you can run:

-   ### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

-   ### `npm test`

Launches the test runner in the interactive watch mode.\
All tests are inside of App.test.js. Album and Albums components are tested using mocks that you can find in ./src/mocks.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

The Photo Album App is deployed on Netlify and the link to the [Live Demo](https://my-photo-app.netlify.app/) can be found here as well as the top of the page.
