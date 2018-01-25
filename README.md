# bstarter
starter including Bootstrap4, Webpack, Sass, jQuery and loaders.


npm init

npm install -g webpack webpack-dev-server --save-dev

npm install bootstrap --save


import 'bootstrap'; ( in 'app.js')

@import "custom";
@import "~bootstrap/scss/bootstrap.scss";   ( in 'main.js')


npm install style-loader css-loader sass-loader node-sass postcss-loader extract-text-webpack-plugin --save-dev

npm install jquery popper.js --save

npm install babel-loader babel-core babel-preset-env --save-dev

npm install file-loader html-loader html-webpack-plugin --save-dev
