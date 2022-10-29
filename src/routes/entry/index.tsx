import Layout from "../../components/Layout.tsx";
import Entry from "../../components/Entry.tsx";
import { getEntry } from "../../lib/operations.ts";

const META = name => ({
  title: `${name} - Kita Conjugator Entry`,
  description: `Details for the entry "${name}" in Kita Conjugator`,
});

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
        
        if (!entry) {
          return ctx.renderNotFound({ name: "Entry" });
        }
  
        return ctx.render({ ...entry });
      } catch (e) {
        return new Response("Internal Server Error", {
          status: 500,
        });
      }
    }
  },
};

export default function Page({ data }) {
  const { definition, value } = data;
  const name = definition.root;
  
  return (
    <Layout {...META(name)}>
      <main class="flex-1 flex-col">
        <Entry {...data} />
      </main>
    </Layout>
  );
}
