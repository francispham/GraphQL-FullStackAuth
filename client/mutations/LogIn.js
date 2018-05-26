import gql from 'graphql-tag';

export default gql`
  mutation LogIn($email: String, $password: String){
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;
