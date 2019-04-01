import gql from 'graphql-tag'
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`
export { getAuthorsQuery }

