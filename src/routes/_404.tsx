import Layout from "../components/Layout.tsx";

const META = (name) => ({
  title: `${name} Not Found`,
  description: `${name} not found`,
});

export default function Page({ data }) {
  const name = data?.name ?? "Page";
  return (
    <Layout {...META(name)}>
      <main class="flex-1 flex-col gap-3">
        <h1 class="text-xl font-bold">Not Found</h1>
        <p>{`${name} not found.`}</p>
      </main>
    </Layout>
  );
}
