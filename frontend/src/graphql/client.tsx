import { gql } from "@apollo/client";

export const ADD_COUNTRY = gql`
  mutation addCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      name
      id
      emoji
      code
      continent {
        id
        name
      }
    }
  }
`;

export const ADD_CONTINENT = gql`
  mutation addContinent($data: NewContinentInput!) {
    addContinent(data: $data) {
      id
      name
    }
  }
`;

export const GET_CONTINENTS = gql`
  query Continents {
    continents {
      id
      name
    }
  }
`;

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      continent {
        name
      }
      emoji
      id
      name
    }
  }
`;
