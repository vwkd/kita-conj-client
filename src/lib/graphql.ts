const SERVER_URL = "https://vwkd-kita-conj-server.deno.dev/api";

export async function gql_op({ query, variables, operationName, returnKey }) {
  const headers = { "Content-Type": "application/json" };

  const body = JSON.stringify({ query, variables, operationName });

  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers,
    body,
  });

  const response = await res.json();

  if (response.error) {
    throw new Error("gql_op error", response.error);
  }
  
  const data = response.data[returnKey];

  return data;
}
