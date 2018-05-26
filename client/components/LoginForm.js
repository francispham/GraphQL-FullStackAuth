import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/LogIn';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }] //Fixing Header not update when login
    });
  }

  render() {
    return (
      <div>
        <h4>Please Log In</h4>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
