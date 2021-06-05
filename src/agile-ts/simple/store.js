import { Agile, globalBind, generateId } from "@agile-ts/core";

const App = new Agile({ logConfig: { level: 0 } });

const FIRST_PERSON = App.createState([]).persist("person1-storage-key");
const SECOND_PERSON = App.createState([]).persist("person2-storage-key");

export const store = {
  FIRST_PERSON,
  SECOND_PERSON,
};

// For better debugging
globalBind("__simple_store__", store);
