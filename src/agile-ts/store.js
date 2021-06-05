import { Agile, globalBind, generateId } from "@agile-ts/core";

const App = new Agile({ logConfig: { level: 0 } });

const MESSAGES = App.createCollection();
const PERSON_1 = MESSAGES.createGroup("person1");
const PERSON_2 = MESSAGES.createGroup("person2");

const handleSendMessage = (newMessage, from, to) => {
  const messageId = generateId();
  MESSAGES.collect({ id: messageId, text: newMessage, from }, from);
  setTimeout(() => {
    MESSAGES.getGroup(to)?.add(messageId);
  }, 500);
};

export const store = {
  MESSAGES,
  PERSON_1,
  PERSON_2,
  handleSendMessage,
};

// For better debugging
globalBind("__store__", store);
