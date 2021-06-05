import ChatBox from "react-custom-chat";
import { useAgile } from "@agile-ts/react";
import { store } from "./store";

const personKey = "person1";

export const FirstPerson = () => {
  const messages =
    useAgile(store.MESSAGES.getGroupWithReference(personKey)) ?? [];

  return (
    <ChatBox
      messageList={messages.map((message) => {
        message.person = message.from === personKey ? "primary" : "secondary";
        return message;
      })}
      onSendMessage={(message) =>
        store.handleSendMessage(message, personKey, "person2")
      }
      settings={{
        position: "left",
        navColor: "green",
        navText: "Mycroft",
        isOpen: true,
      }}
    />
  );
};
