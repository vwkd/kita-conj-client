import { gql_op } from "./graphql.ts";

export async function getEntry(id) {
  const query = `query getEntry($id: ID!) {
  entry(id: $id) {
    id
    value {
      PRS {
        S1 {
          person1 {
            key
            value
          }
          root {
            key
            value
          }
          person2 {
            key
            value
          }
        }
      }
    }
  }
}`;

  const variables = {
    id,
  };

  const operationName = "getEntry";

  const returnKey = "entry";

  return gql_op({
    query,
    variables,
    operationName,
    returnKey,
  });
}
