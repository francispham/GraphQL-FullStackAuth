import gql from 'graphQL-tag';

export default gql`
  {
    user {
      id
      email
    }
  }
`;
