import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/LogIn';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  componentWillUpdate(nextProps) {
    // this.props -> The old, current set of props
    // nextProps  -> The next set of props that will be in place
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }] //Fixing Header not update when login
    })
    // .then(() => router.push('/dashboard'))
    .catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <div>
        <h4>Please Log In</h4>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(query) (
   graphql(mutation)(LogInForm)
);
