# imdbid-to-title
Small module to convert IMDB id to movie title

## Installation
`npm i imdbid-to-title`

## Usage
```
const toTitle = require('imdbid-to-title');
toTitle('tt4154664').then(res => console.log('Movie title: ' + res));
// Movie title: Captain Marvel
```
