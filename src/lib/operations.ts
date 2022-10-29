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

fragment table on Table {
  SRS1 {
    GRP1 {
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
    GRP2 {
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
  }
  SRS2 {
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
  SRS3 {
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
