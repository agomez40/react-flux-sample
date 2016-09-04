/**
 * Created by agomez40 on 03/09/2016.
 */

// Define JQuery as global, required by bootstrap
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var Home = require('./components/homePage');
var About = require('./components/about/about');
var Header = require('./components/common/header');
var Authors = require('./components/author/authorPage');

(function(win){
    'use strict';

    var App = React.createClass({
        render: function(){
            var Child;

            switch (this.props.route){
                case 'about': Child = About; break;
                case 'authors': Child = Authors; break;
                default: Child = Home;
            }

            return (
                <div>
                    <Header />
                    <Child />
                </div>
            );
        }
    });

    function render(){
        var route = win.location.hash.substr(1);
        ReactDOM.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();
})(window);