const request = require('request-promise');

function toMovieTitle(id) {
    return request.get('https://www.imdb.com/title/' + id).then(res => {
        const regex = /<h1 class="">(.+?)&/gm;
        return regex.exec(res)[1];
    });
}

module.exports = toMovieTitle;
