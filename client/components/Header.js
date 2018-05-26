import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router'
import query from '../queries/CurrentUser';
import mutation from '../mutations/LogOut';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (this.props.data.loading) {
      return <div />;
    }
    if (user) {
      return (
        <li><a onClick={this.onLogoutClick.bind(this)}>Log Out</a></li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/LogIn">Log In</Link>
          </li>
        </div>
      )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Home</Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
