> STEPS:
#initialize npm:
step: npm init

#install GLOBAL node packages:
step: npm i -g webpack webpack-cli webpack-dev-server --verbose
step: npm i -g yarn

#install DEV DEPENDENCIES:
step: npm i -D webpack webpack-cli
step: npm i --save-dev babel babel-preset-env babel-preset-react
step: npm i --save-dev css-loader file-loader react-hot-loader style-loader url-loader babel-loader

#install DEPENDENCIES:
step: npm i -S react react-dom react-router--verbose

#configure Webpack.config.js:
step: define - mode, context, entry, output, module(loaders), devserver

#configure .bablerc file:
This file is used by babel by default to consider the babel-box used.
Step: we need two type of babel box in this project:
- 