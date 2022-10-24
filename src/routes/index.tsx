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
      try { 
        const entry = await getEntry(id);
  
        return ctx.render({ ...entry });
      } catch (e) {
        return new Response("Internal Server Error", {
          status: 500,
        });
      }
    }
  },
};

export default function Home({ data }) {
  return (
    <body>
      <Head>
        <link rel="stylesheet" href="/reset.css" />
      </Head>
      <main class="flex-1 flex-col">
        { data.value
          ? <Entry {...data} />
          : <p>No entry found.</p>
        }
      </main>
    </body>
  );
}

function Entry({ id, value }) {
  return (
    <Table {...value} />
  );
}

function Table({ PRS, IMPF, PRSSUBJ, FUT, COND, FUTSUBJ, AOR, OPT, PERF, PLUPERF, PERFSUBJ }) {
  return (
    <div class="flex-col gap-3">
      <div class="flex-col gap-1">
        <h2 class="text-lg font-semibold text-slate-500">Series 1</h2>
        <div class="flex-col gap-1">
          <h3 class="font-semibold text-slate-500">Group 1</h3>
          <Screeve {...PRS} label="Present" />
          <Screeve {...IMPF} label="Imperfect" />
          <Screeve {...PRSSUBJ} label="Present Subjunctive" />
        </div>
        <div class="flex-col gap-1">
          <h3 class="font-semibold text-slate-500">Group 2</h3>
          <Screeve {...FUT} label="Future" />
          <Screeve {...COND} label="Conditional" />
          <Screeve {...FUTSUBJ} label="Future Subjunctive" />
        </div>
      </div>
      <div class="flex-col gap-1">
        <h2 class="text-lg font-semibold text-slate-500">Series 2</h2>
        <Screeve {...AOR} label="Aorist" />
        <Screeve {...OPT} label="Optative" />
      </div>
      <div class="flex-col gap-1">
        <h2 class="text-lg font-semibold text-slate-500">Series 3</h2>
        <Screeve {...PERF} label="Perfect" />
        <Screeve {...PLUPERF} label="Pluperfect" />
        <Screeve {...PERFSUBJ} label="Perfect Subjunctive" />
      </div>
    </div>
  );
}

function Screeve({ S1, S2, S3, P1, P2, P3, label }) {
  return (
    <div class="flex-col gap-1">
      <h4 class="text-sm font-semibold text-slate-500">{label}</h4>
      <div class="flex-col">
        <Form {...S1} label="S1" />
        <Form {...S2} label="S2" />
        <Form {...S3} label="S3" />
        <Form {...P1} label="P1" />
        <Form {...P2} label="P2" />
        <Form {...P3} label="P3" />
      </div>
    </div>
  );
}

function Form({ preverb, person1, version, root, thema, person2, label }) {
  return (
    <div class="gap-1">
      <p class="text-sm font-semibold text-slate-500">{label}</p>
      <p>
        <Component {...preverb} />
        <Component {...person1} />
        <Component {...version} />
        <Component {...root} />
        <Component {...thema} />
        <Component {...person2} />
      </p>
    </div>
  );
}

function Component({ label, value }) {
  if (value) {
    return (
      <span>{value}</span>
    );
  } else {
    return null;
  }
}
