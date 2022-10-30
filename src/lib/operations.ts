import { gql_op } from "./graphql.ts";

export async function getEntry(id) {
  const query = `query getEntry($id: ID!) {
  entry(id: $id) {
    id
    definition {
      category
      preverb
      version
      root
      thema
    }
    value {
      ...table
    }
  }
}

fragment component on Component {
  label
  value
  isException
  note
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
  modus {
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

fragment grp1 on GRP1 {
  PRS {
    ...screeve
  }
  IMPF {
    ...screeve
  }
  PRSSUBJ {
    ...screeve
  }
}

fragment grp2 on GRP2 {
  FUT {
    ...screeve
  }
  COND {
    ...screeve
  }
  FUTSUBJ {
    ...screeve
  }
}

fragment srs1 on SRS1 {
  GRP1 {
    ...grp1
  }
  GRP2 {
    ...grp2
  }
}

fragment srs2 on SRS2 {
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
}

fragment srs3 on SRS3 {
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
}

fragment table on Table {
  SRS1 {
    ...srs1
  }
  SRS2 {
    ...srs2
  }
  SRS3 {
    ...srs3
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
