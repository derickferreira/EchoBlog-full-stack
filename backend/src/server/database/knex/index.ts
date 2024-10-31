import knex from "knex";
import { test, development } from "./Environment";
import "dotenv/config";

const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    case "test":
      return test;

    default:
      return development;
  }
};

export const Knex = knex(getEnvironment());
