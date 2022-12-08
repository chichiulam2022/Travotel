import { gql } from '@apollo/client';

export const QUERY_HOTELS = gql`
    query getHotels($destination: ID) {
        hotels(destination: $destination) {
            _id
            name
            type
            destination {
              _id
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
            name
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

export const QUERY_DESTINATION = gql `
    {
        destination {
            _id
            name
        }
    }
`;

export const QUERY_USER = gql `
    query User($username: String!) {
        ser(username: $username) {
            _id
            username
            email
            comments {
              _id
              commentText
              createdAt
              username
            }
            bookings {
              _id
              hotels {
                _id
                name
                type
                destination {
                  _id
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
              purchaseDate
            }
          }
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

export const QUERY_CHECKOUT = gql `
    query getCheckout ($hotels: [ID]!) {
        checkout(hotels: $hotels) {
        session
        }
    }
`;