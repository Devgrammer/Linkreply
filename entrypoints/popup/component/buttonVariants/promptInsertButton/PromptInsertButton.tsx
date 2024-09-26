import React from "react";
import InsertionIcon from "../../../../../assets/insert-prompt-icon.svg";

const PromptInsertButton: React.FC = () => {
  const handleInsertButton = () => {
    chrome.runtime.sendMessage({
      text: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",
      from: "insert-btn",
    });
  };

  return (
    <button
      className="prompt-inserting-button w-max h-12 border flex items-center border-gray-300 rounded-lg px-2 py-2 text-md gap-2"
      style={{ border: "1px solid #666D80" }}
      onClick={handleInsertButton}
    >
      <img src={InsertionIcon} alt="Insert Prompt" className="w-4" />
      <span
        className="text-gray-600 font-semibold"
        style={{ fontSize: "12px" }}
      >
        Insert
      </span>
    </button>
  );
};

export default PromptInsertButton;
