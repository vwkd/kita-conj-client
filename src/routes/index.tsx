import Layout from "../components/Layout.tsx";

const META = {
  title: "Kita Conjugator",
  description: "A Georgian German verb conjugator",
};

export default function Page() {
  return (
    <Layout {...META}>
      <main class="flex-1 flex-col gap-3">
        <h1 class="text-xl font-bold">Kita Conjugator</h1>
        <p>A Georgian German verb conjugator.</p>
      </main>
    </Layout>
  );
}
