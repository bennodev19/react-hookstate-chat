import ChatBox from "react-custom-chat";
import { useAgile } from "@agile-ts/react";
import { store } from "./store";

export const SecondPerson = () => {
  const messages = useAgile(store.SECOND_PERSON);

  const handleSendMessage = (newMessage) => {
    store.SECOND_PERSON.set((v) => [
      ...v,
      ...[{ text: newMessage, person: "primary" }],
    ]);
    setTimeout(() => {
      store.FIRST_PERSON.set((v) => [
        ...v,
        ...[{ text: newMessage, person: "secondary" }],
      ]);
    }, 500);
  };

  return (
    <ChatBox
      messageList={messages}
      onSendMessage={handleSendMessage}
      settings={{
        position: "right",
        navColor: "blue",
        navText: "Cortana",
        isOpen: true,
      }}
    />
  );
};
