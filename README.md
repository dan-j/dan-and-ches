# dan-and-ches

Website for Dan and Ches' wedding. Based on the 
[react-express-starter](https://github.com/dan-j/react-express-starter) project, it has a REST API 
implemented by [Express](https://expressjs.com/) and a front-end 
[React](https://facebook.github.io/react/) application. The application can be built and served 
by the single express app with webpack building it prior to running, or when in development mode,
 express makes use of webpack-dev-middleware and webpack-hot-middleware to build and serve the 
 bundles in real-time. 

_Note to readers: This started off quite a well-written project but now it's a bit more hacky. 
There's less separation between container and presentation react components and the API has 
slowly lost its "RESTful-ness"._ :cry:

Here's a preview!

![](homepage.jpg?raw=true)

## How it works

To learn more on how both client-side and server-side HMR works, see the README for the 
react-express-starter which this has been built upon (mentioned above).

## Usage

### Installing

Install dependencies with `npm install`

### Development Mode

To run in development mode with HMR and express reloading simply run `npm run dev`

### Building

The project is built via `npm run build`. This creates a `./build` directory with all the files 
required to run the app in production mode simply using `node`.

### Running in Production

If the project has already been built, `npm start` will run the app. There's an additional 
package script to clean, build and start the application, `npm run start:clean`.

## Extras

### Tests

Sadly there are no tests... well, there is one, but it fails since it's not been updated since 
the start of the project :disappointed:.

### Linting

We use [eslint](http://eslint.org/) with the 
[airbnb](https://www.npmjs.com/package/eslint-config-airbnb) configuration, run `npm run lint` to
execute the linter. Alternatively this can be run in 'watch' mode using `npm run lint:watch`, 
this is achieved with the [eslint-watch](https://www.npmjs.com/package/eslint-watch) package.
