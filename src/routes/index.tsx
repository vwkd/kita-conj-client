import { Head } from "$fresh/runtime.ts";
import { getEntry } from "../lib/operations.ts";

export const handler = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (id === null) {
      return new Response("Redirecting to /", {
        status: 307,
        headers: { location: "/" },
      });
    } else {
      // TODO: error handling
      const entry = await getEntry(id);

      return ctx.render({ ...entry });
    }
  },
};

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/reset.css" />
      </Head>
      <main class="flex-1">
        { data.value
          ? <Entry {...data} />
          : <p>No entry found.</p>
        }
      </main>
    </div>
  );
}

function Entry({ id, value }) {
  return (
    <>
      <Table {...value} />    
    </>
  );
}

function Table({ PRS, IMPF, PRSSUBJ, FUT, COND, FUTSUBJ, AOR, OPT, PERF, PLUPERF, PERFSUBJ }) {
  return (
    <>
      <div>
        <h2>Series 1</h2>
        <div>
          <h3>Group 1</h3>
          <Screeve {...PRS} />
          <Screeve {...IMPF} />
          <Screeve {...PRSSUBJ} />
        </div>
        <div>
          <h3>Group 2</h3>
          <Screeve {...FUT} />
          <Screeve {...COND} />
          <Screeve {...FUTSUBJ} />
        </div>
      </div>
      <div>
        <h2>Series 2</h2>
        <Screeve {...AOR} />
        <Screeve {...OPT} />
      </div>
      <div>
        <h2>Series 3</h2>
        <Screeve {...PERF} />
        <Screeve {...PLUPERF} />
        <Screeve {...PERFSUBJ} />
      </div>
    </>
  );
}

function Screeve({ S1, S2, S3, P1, P2, P3 }) {
  return (
    <>
      <Form {...S1} />
      <Form {...S2} />
      <Form {...S3} />
      <Form {...P1} />
      <Form {...P2} />
      <Form {...P3} />
    </>
  );
}

function Form({ preverb, person1, version, root, thema, person2 }) {
  return (
    <>
      <Component {...preverb} />
      <Component {...person1} />
      <Component {...version} />
      <Component {...root} />
      <Component {...thema} />
      <Component {...person2} />
    </>
  );
}

function Component({ key, value }) {
  if (value) {
    return (
      <span>{value}</span>
    );
  } else {
    return null;
  }
}
