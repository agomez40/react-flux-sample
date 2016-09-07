/**
 * Created by agomez40 on 06/09/2016.
 */

'use strict';

var React = require('react');

var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var Home = require('./components/homePage');
var About = require('./components/about/about');
var Authors = require('./components/author/authorPage');
var App = require('./components/app');

var routes = (
    <Route path="/" handler={App}>
        <IndexRoute component={Home} />
        <Route path="authors" component={Authors}/>
        <Route path="about" component={About}/>
    </Route>
);

module.export = routes;