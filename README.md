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

-   ### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

-   ### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that
this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
