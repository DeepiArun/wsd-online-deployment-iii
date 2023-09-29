import postgres from "https://deno.land/x/postgresjs@v3.3.5/mod.js";

const sql = postgres({}); // injecting config from env

export { sql };
