import React, { useEffect, useRef, useState } from "react";
import PromptGenerationButton from "../buttonVariants/promptGenerationButton/PromptGenerationButton";
import ChatMessage from '../chatMessage/ChatMessage'
interface PromptModalProps {
  closeModal: () => void;
}

type TMessage = {
  message: string;
  isUser: boolean;
};

const PromptModal: React.FC<PromptModalProps> = ({ closeModal }) => {
  const [messages, setMessages] = useState<TMessage>([]);
  const [promt, setPrompt] = useState<string>("");

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutSideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    closeModal();
  };

  const handleGeneratePrompt = () => {
    if (prompt.trim() !== "") {
      setMessages([...messages, { message: prompt, isUser: true }]);
      setPrompt("");
    } else {
      console.log("Prompt is empty, cannot generate message.");
    }
  };

  useEffect =
    (() => {
      let timeoutId: NodeJS.Timeout;
      if (messages.length === 1 && messages[0].isUser) {
        timeoutId = setTimeout(() => {
          setMessages([...messages,{message:"Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",isUser: false,}]);
        }, 200);
      }
      return () => clearTimeout(timeoutId);
    },
    [messages]);
};

return (
  <div
    className="absolute top-0 left-0  bottom-0 right-0 flex justify-center items-center  w-full h-full bg-black bg-opacity-30  z-1000"
    onClick={handleOutSideClick}
  >
    <div
      className="h-max flex flex-col items-end bg-white shadow-lg rounded-xl p-6 gap-2"
      style={{ width: "25%" }}
      ref={modalRef}
    >
      <ChatMessage message={messages} />
      <input
        type="text"
        className="w-full  rounded border border-gray-100 p-2 mb-4"
        placeholder="Your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <PromptGenerationButton
        messages={messages}
        handleGenerate={handleGeneratePrompt}
      />
    </div>
  </div>
);

export default PromptModal;
