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
      obj
    }
    value {
      ...exception
      ...table
    }
  }
}

fragment exception on Exception {
  value
  note
}

fragment component on Component {
  value
}

fragment form on Form {
  preverb {
    ...exception
    ...component
  }
  person1 {
    ...exception
    ...component
  }
  version {
    ...exception
    ...component
  }
  root {
    ...exception
    ...component
  }
  thema {
    ...exception
    ...component
  }
  modus {
    ...exception
    ...component
  }
  person2 {
    ...exception
    ...component
  }
}

fragment subject on Subject {
  S1 {
    ...exception
    ...form
  }
  S2 {
    ...exception
    ...form
  }
  S3 {
    ...exception
    ...form
  }
  P1 {
    ...exception
    ...form
  }
  P2 {
    ...exception
    ...form
  }
  P3 {
    ...exception
    ...form
  }
}

fragment screeve on Screeve {
  S1 {
    ...exception
    ...subject
  }
  S2 {
    ...exception
    ...subject
  }
  S3 {
    ...exception
    ...subject
  }
  P1 {
    ...exception
    ...subject
  }
  P2 {
    ...exception
    ...subject
  }
  P3 {
    ...exception
    ...subject
  }
}

fragment grp1 on GRP1 {
  PRS {
    ...exception
    ...screeve
  }
  IMPF {
    ...exception
    ...screeve
  }
  PRSSUBJ {
    ...exception
    ...screeve
  }
}

fragment grp2 on GRP2 {
  FUT {
    ...exception
    ...screeve
  }
  COND {
    ...exception
    ...screeve
  }
  FUTSUBJ {
    ...exception
    ...screeve
  }
}

fragment srs1 on SRS1 {
  GRP1 {
    ...exception
    ...grp1
  }
  GRP2 {
    ...exception
    ...grp2
  }
}

fragment srs2 on SRS2 {
  AOR {
    ...exception
    ...screeve
  }
  AORIMPF {
    ...exception
    ...screeve
  }
  OPT {
    ...exception
    ...screeve
  }
  OPTIMPF {
    ...exception
    ...screeve
  }
}

fragment srs3 on SRS3 {
  PERF {
    ...exception
    ...screeve
  }
  PERFIMPF {
    ...exception
    ...screeve
  }
  PLUPERF {
    ...exception
    ...screeve
  }
  PLUPERFIMPF {
    ...exception
    ...screeve
  }
  PERFSUBJ {
    ...exception
    ...screeve
  }
  PERFSUBJIMPF {
    ...exception
    ...screeve
  }
}

fragment table on Table {
  SRS1 {
    ...exception
    ...srs1
  }
  SRS2 {
    ...exception
    ...srs2
  }
  SRS3 {
    ...exception
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
