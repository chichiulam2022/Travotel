import { gql } from '@apollo/client';

export const QUERY_HOTELS = gql`
    query getHotels($destination: ID) {
        {
            hotel(_id: $id) {
              _id
              address
              city
              description
              destination {
                _id
              }
              distance
              featured
              likes
              name
              nights
              photos
              price
              rooms
              type
            }
        }
    }
`;

export const  QUERY_ALL_HOTELS = gql`
    {
        hotels {
        _id
        address
        city
        description
        destination {
            _id
        }
        distance
        featured
        likes
        name
        nights
        photos
        price
        rooms
        type
        }
    }
`;

export const QUERY_USER = gql `
    query User($username: String!) {
        user(username: $username) {
        _id
        email
        username
        }
    }
`;

export const QUERY_COMMENTS = gql `
query comments($username: String) {
    comments(username: $username) {
      _id
      commentText
      createdAt
      username
    }
  }
`;