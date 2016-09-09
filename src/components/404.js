/**
 * Created by agomez40 on 08/09/2016.
 */
'use strict';

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Page not found</h1>
                <p>Whoops! Sorry, nothing to see here.</p>
                <p><Link to="/">Back to Home</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;
