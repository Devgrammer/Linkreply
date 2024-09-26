interface ChatMessageProps {
  message: {
    message: string;
    isUser: boolean;
  }[];
}

const ChatMessage: React.FC = ({ message }: ChatMessageProps) => {
  return (
    <div className="w-full flex flex-col gap-6 mb-4 ">
      {message.map((msg, index) => (
        <span
          key={index}
          className={`h-max  rounded-xl text-gray-700 px-6 py-3 ${
            msg.isUser ? "self-end bg-gray-100" : "self-start bg-blue-100"
          }`}
          style={{ maxWidth: "85%" }}
        >
          {msg.message}
        </span>
      ))}
    </div>
  );
};

export default ChatMessage;
