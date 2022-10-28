import { Head } from "$fresh/runtime.ts";

export default function Layout({ children, title, description }) {
  // note: needs 95vw limit to prevent overflow on smaller screens
  return (
    <body class="flex-1 max-w-[min(95vw,768px)] mx-auto pb-4 flex-col gap-4 bg-white dark:bg-gray-900 text-slate-800 dark:text-gray-300">
      <MyHead {...{ title, description }} />
      <div class="flex-1 min-h-0 flex-col">
        {children}
      </div>
    </body>
  );
}

function MyHead({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      <link rel="stylesheet" href="/reset.css" />
    </Head>
  );
}
