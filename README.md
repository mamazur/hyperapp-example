


[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Simple responsive application with weather API from openweathermap, browser location detection and form edit. Created originally to learn Hyperapp.


- [Hyperapp](https://github.com/hyperapp/hyperapp) Hyperapp 2.0
- [Parcel](https://github.com/parcel-bundler/parcel) bundler
- [CSS/Sass/SCSS](https://github.com/sass/node-sass) support 
- [jsx](https://reactjs.org/docs/introducing-jsx.html) support 

Change some data, retrieve location, hit **Generate Card** button and enjoy.


## installation

````bash
    $ git clone https://github.com/mamazur/hyperapp-example.git

    $ cd hyperapp-example

    $ npm i

    $ npm run dev
````

In order to use location retrieval - create **config.json** file in the project folder. You will need an API key from https://openweathermap.org/.

````js
  export const config = {
    APPID: 'YOUR-API-KEY'
  }

````

Open application at http://localhost:3000/ in browser
 
