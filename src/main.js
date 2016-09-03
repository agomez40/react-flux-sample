/**
 * Created by agomez40 on 03/09/2016.
 */

// Define JQuery as global, required by bootstrap
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var Home = require('./components/homePage');

ReactDOM.render(<Home />, document.getElementById('app'));