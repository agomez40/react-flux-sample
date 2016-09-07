/**
 * Created by agomez40 on 06/09/2016.
 */
var React = require('react');
var Header = require('./common/header');
$ = jQuery = require('jquery'); // Define JQuery as global, required by bootstrap

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

module.exports = App;