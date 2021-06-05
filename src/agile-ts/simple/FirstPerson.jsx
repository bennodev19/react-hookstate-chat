import ChatBox from "react-custom-chat";
import { useAgile } from "@agile-ts/react";
import { store } from "./store";

export const FirstPerson = () => {
  const messages = useAgile(store.FIRST_PERSON);

  const handleSendMessage = (newMessage) => {
    store.FIRST_PERSON.set((v) => [
      ...v,
      ...[{ text: newMessage, person: "primary" }],
    ]);
    setTimeout(() => {
      store.SECOND_PERSON.set((v) => [
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
        position: "left",
        navColor: "green",
        navText: "Mycroft",
        isOpen: true,
      }}
    />
  );
};
