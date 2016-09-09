/**
 * Created by agomez40 on 03/09/2016.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

/* React Router imports */
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

/* App components */
var Home = require('./components/homePage');
var About = require('./components/about/about');
var Authors = require('./components/author/authorPage');
var Header = require('./components/common/header');
var NotFoundPage = require('./components/404');
var ManageAuthor = require('./components/author/manageAuthorPage');

// Main App component
var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

// App Route definitions
var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="authors" component={Authors}/>
            <Route path="author" component={ManageAuthor} />
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
);

// Render the page
ReactDOM.render(routes, document.getElementById('app'));