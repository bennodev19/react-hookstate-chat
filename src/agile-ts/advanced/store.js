import { Agile, globalBind, generateId } from "@agile-ts/core";

const App = new Agile({ logConfig: { level: 0 } });

const MESSAGES = App.createCollection({ key: "messages" });

const handleSendMessage = (newMessage, from, to) => {
  const messageId = generateId();
  MESSAGES.collect({ id: messageId, text: newMessage, from });

  let fromGroup = MESSAGES.getGroup(from);
  if (!fromGroup) fromGroup = MESSAGES.createGroup(from);
  fromGroup.add(messageId);

  setTimeout(() => {
    let toGroup = MESSAGES.getGroup(to);
    if (!toGroup) toGroup = MESSAGES.createGroup(to);
    toGroup.add(messageId);
  }, 500);
};

export const store = {
  MESSAGES,
  handleSendMessage,
};

// For better debugging
globalBind("__advanced_store__", store);
