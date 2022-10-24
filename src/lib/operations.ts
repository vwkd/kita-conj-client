import { gql_op } from "./graphql.ts";

export async function getEntry(id) {
  const query = `query getEntry($id: ID!) {
  entry(id: $id) {
    id
    value {
      ...table
    }
  }
}

fragment component on Component {
  key
  value
}

fragment form on Form {
  preverb {
    ...component
  }
  person1 {
    ...component
  }
  version {
    ...component
  }
  root {
    ...component
  }
  thema {
    ...component
  }
  person2 {
    ...component
  }
}

fragment screeve on Screeve {
  S1 {
    ...form
  }
  S2 {
    ...form
  }
  S3 {
    ...form
  }
  P1 {
    ...form
  }
  P2 {
    ...form
  }
  P3 {
    ...form
  }
}

fragment table on Table {
  PRS {
    ...screeve
  }
  IMPF {
    ...screeve
  }
  PRSSUBJ {
    ...screeve
  }
  FUT {
    ...screeve
  }
  COND {
    ...screeve
  }
  FUTSUBJ {
    ...screeve
  }
  AOR {
    ...screeve
  }
  OPT {
    ...screeve
  }
  PERF {
    ...screeve
  }
  PLUPERF {
    ...screeve
  }
  PERFSUBJ {
    ...screeve
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
