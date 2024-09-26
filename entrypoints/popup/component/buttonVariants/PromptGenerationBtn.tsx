import React from "react";
import RegenerationIcon from "../../../../assets/generation.svg";
import GenerationIcon from "../../../../assets/generation.svg";
import PromptInsertButton from "./promptInsertButton/PromptInsertButton";

interface PromptGenerationBtnProps {
  messages: {
    message: string;
    isUser: boolean;
  }[];
  handleGenerate: () => void;
}

const PromptGenerationButton: React.FC = ({messages,handleGenerate}: PromptGenerationBtnProps) => {
  return (
    <div className="prompt-generation-continaer flex items-center gap-4">
      {messages.length > 0 && <PromptInsertButton />}

      <button
        className="promp-generate-btn w-max h-12 text-white p-2 rounded-lg px-6 py-2 text-md flex gap-2 items-center self-end"
        style={{ backgroundColor: "#3B82FC" }}
        onClick={messages.length > 1 ? handleGenerate : undefined}
      >
        <img
          src={messages.length > 0 ? RegenerationIcon : GenerationIcon}
          alt="Generation Icon"
          className="w-5 h-5"
        />
        <span style={{ fontSize: "12px" }}>
          {messages.length > 0 ? "Regenerate" : "Generate"}
        </span>
      </button>
    </div>
  );
};

export default PromptGenerationButton;
