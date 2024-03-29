import { config } from "dotenv";

config({ path: "../../.env" });

export default {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    tableName: "migrations",
    directory: ["./migrations"],
  },
  seeds: {
    directory: ["./seeds"],
  },
};
