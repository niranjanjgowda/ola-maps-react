# React Components for the Ola Maps

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/visgl/react-google-maps/tree/main/LICENSE)

This is a JavaScript library to integrate the Ola Maps
into your React application.
It comes with a collection of React components to create maps and markers (more if not lazy)

Inspired by [Google-react-maps][https://www.npmjs.com/package/@vis.gl/react-google-maps]

## Installation

This library is available on npm as [`ola-maps-react`].

```sh
npm install ola-maps-react
```

## Usage

First create an [`OlaMaps account`][https://maps.olakrutrim.com/dashboard], Create a [`project`][https://maps.olakrutrim.com/dashboard] and get an API KEY.

Install the package, create an .env file with in your react project and assign API KEY to REACT_APP_OLA_MAPS_API_KEY variable to auto pickup the APIKEY after installing the package

To render a simple map, add a [`Map`] component and wrap it inside a div

For more advanced use-cases you can even add your own components to the map using [`react-map-gl`] package

1. Using .env for API KEY

```jsx
import { Map } from "ola-maps-react";

const App = () => {

  return (
    <div style={{width:"500px", height:"500px", position:"relative"}}>
      <Map/>
    </div>
  );
}

export default App;
```
2. Using apikey attribute for APIKEY


```jsx
import { Map } from "ola-maps-react";

const App = () => {

  return (
    <div style={{width:"500px", height:"500px", position:"relative"}}>
      <Map apiKey="APIKEY"/>      
    </div>
  );
}

export default App;
```

3. USing .env for API KEY with attributes

```jsx
import { Map } from "ola-maps-react";

const App = () => {

  return (
    <div style={{width:"500px", height:"500px", position:"relative"}}>
      <Map zoom={7} center={{lat:28.7041,lng:77.1025}} apiKey="APIKEY" tilt={0} heading={0}/>      
    </div>
  );
}

export default App;
```

## Examples

Working on it.


## Contact

[`niranjanjgowda1@gmail.com`] for any kind of support regarding usage
[`Call`][https://calendly.com/niranjanjgowda1/ola-maps-integration] -> Get on a call


