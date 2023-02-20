import { gql } from '@apollo/client';

export const ADD_PHONE = gql`
  mutation AddPhone($phone: String!) {
    addPhone(phone: $phone) {
      phone
    }
  }
`;