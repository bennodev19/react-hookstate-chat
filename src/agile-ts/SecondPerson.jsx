import ChatBox from "react-custom-chat";
import { useAgile } from "@agile-ts/react";
import { store } from "./store";

const personKey = "person2";

export const SecondPerson = () => {
  const messages = useAgile(store.PERSON_2);

  return (
    <ChatBox
      messageList={messages.map((message) => {
        message.person = message.from === personKey ? "primary" : "secondary";
        return message;
      })}
      onSendMessage={(message) =>
        store.handleSendMessage(message, personKey, "person1")
      }
      settings={{
        position: "right",
        navColor: "blue",
        navText: "Cortana",
        isOpen: true,
      }}
    />
  );
};
