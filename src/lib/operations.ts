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
  label
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
  AORIMPF {
    ...screeve
  }
  OPT {
    ...screeve
  }
  OPTIMPF {
    ...screeve
  }
  PERF {
    ...screeve
  }
  PERFIMPF {
    ...screeve
  }
  PLUPERF {
    ...screeve
  }
  PLUPERFIMPF {
    ...screeve
  }
  PERFSUBJ {
    ...screeve
  }
  PERFSUBJIMPF {
    ...screeve
  }
  IMPAFF {
    ...screeve
  }
  IMPAFFIMPF {
    ...screeve
  }
  IMPPRB1 {
    ...screeve
  }
  IMPPRB1IMPF {
    ...screeve
  }
  IMPPRB2 {
    ...screeve
  }
  INF {
    ...screeve
  }
  INFIMPF {
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
