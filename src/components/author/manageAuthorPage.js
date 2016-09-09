/**
 * Created by agomez40 on 08/09/2016.
 */
'use strict';

var React = require('react');
var Router = require('react-router');
var hashHistory = require('react-router').hashHistory;
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = Router.withRouter(React.createClass({

    componentWillMount: function(){
        var authorId = this.props.params.id; // From the path '/author:id'

        if(authorId) {
            this.setState({author: AuthorApi.getAuthorById(authorId)});
        }
    },

    componentDidMount: function() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    },

    routerWillLeave: function(nextLocation) {
        if (this.state.dirty)
            return 'Your work is not saved! Are you sure you want to leave?'
    },

    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },

    setAuthorState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        this.state.author[field] = event.target.value;
        return this.setState({author: this.state.author});
    },

    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {}; // clear any previous errors.

        if(this.state.author.firstName.length < 3){
            this.state.errors.firstName = 'First Name is required.';
            formIsValid = false;
        }

        if(this.state.author.lastName.length < 3){
            this.state.errors.lastName = 'Last Name is required.';
            formIsValid = false;
        }

        // Save the state
        this.setState({errors: this.state.errors});

        return formIsValid;
    },

    saveAuthor: function (event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        // Redirect on Save to the Authors Page
        this.setState({dirty: false}, function () {
            AuthorApi.saveAuthor(this.state.author);
            toastr.success('Author saved.');
            hashHistory.push('authors');
        });
    },

    render: function () {
        return (
            <div>
                <AuthorForm author = {this.state.author}
                            onChange = {this.setAuthorState}
                            onSave = {this.saveAuthor}
                            errors = {this.state.errors}/>
            </div>
        );
    }
}));

module.exports = ManageAuthorPage;