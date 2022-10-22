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

function Table({ PRS }) {
  return (
    <>
      <Screeve {...PRS} />    
    </>
  );
}

function Screeve({ S1 }) {
  return (
    <>
      <Form {...S1} />    
    </>
  );
}

function Form({ person1, root, person2 }) {
  return (
    <>
      <Component {...person1} />
      <Component {...root} />
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
