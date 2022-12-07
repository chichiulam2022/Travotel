import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $username: String!,
    $password: String!, 
    $email: String!
    ) {
      addUser(
        username: $username, 
        password: $password, 
        email: $email)  {
          token
          user {
            _id
            username
          }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation Mutation($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      createdAt
      username
    }
  }
`;

export const ADD_BOOKING = gql`
mutation Mutation($hotels: [ID]!) {
  addBooking(hotels: $hotels) {
    purchaseDate
    hotels {
      _id
      name
      type
      destination {
        name
      }
      city
      address
      distance
      photos
      description
      likes
      rooms
      price
      nights
      featured
    }
  }
}
`;