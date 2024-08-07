/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import Messages from "../Messages";
import { ImAttachment } from "react-icons/im";
import { IoMdSend, IoMdClose } from "react-icons/io";

const ChatDialog = ({ interfaceToShow }) => {
  const [responses, setResponses] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);

  const handleMessageSubmit = async (message, file) => {
    try {
      const formData = new FormData();
      formData.append("message", message);
      if (file) {
        formData.append("file", file);
      }

      const { data } = await axios.post(
        "http://localhost:3001/chatbot",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const responseData = {
        text:
          data.message.fulfillmentText ||
          "Sorry, I can't get it. Can you please repeat once?",
        isBot: true,
      };
      setResponses((prevResponses) => [...prevResponses, responseData]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleFileAttachment = (event) => {
    const file = event.target.files[0];
    setAttachedFile(file);
  };

  const handleSubmit = (event) => {
    if (event.key === "Enter" && currentMessage.trim()) {
      const message = { text: currentMessage, isBot: false };
      setResponses((prevResponses) => [...prevResponses, message]);
      handleMessageSubmit(currentMessage, attachedFile);
      setCurrentMessage("");
      setAttachedFile(null);
    }
  };
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch h-full scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2">
        <Messages messages={responses} />
      </div>

      <div className="flex w-full flex-col gap-2 px-3 py-2 border-t-2 border-gray-200 dark:border-orange-600">
        {attachedFile && (
          <div className="flex justify-between items-center gap-4 bg-gray-300 p-2 rounded">
            <span>{attachedFile.name}</span>
            <button
              onClick={() => setAttachedFile(null)}
              className="text-red-500 hover:text-red-700"
            >
              <IoMdClose size={20} />
            </button>
          </div>
        )}
        <div className="flex gap-4 items-center">
          <label
            className="font-extrabold flex items-center text-orange-300 cursor-pointer"
            title="Attach document"
          >
            <ImAttachment size={25} />
            <input
              type="file"
              className="hidden"
              onChange={handleFileAttachment}
            />
          </label>
          <div className="w-full p-1 rounded-lg shadow-sm bg-orange-500 lg:max-w-lg">
            <input
              type="text"
              value={currentMessage}
              onChange={handleMessageChange}
              onKeyDown={handleSubmit}
              placeholder="Enter your message here"
              className="block w-full py-3 pl-3 pr-3 text-sm placeholder-gray-500 bg-white  rounded-md  dark:text-white  focus:outline-none focus:text-gray-900   focus:ring-1 focus:ring-indigo-300 sm:text-sm"
            />
          </div>
          <button
            className={`font-extrabold ${
              currentMessage.trim() || attachedFile
                ? "text-orange-500"
                : "text-gray-300"
            }`}
            title="Send message"
            disabled={!currentMessage.trim() && !attachedFile}
            onClick={() => {
              if (currentMessage.trim() || attachedFile) {
                handleSubmit({ key: "Enter" });
              }
            }}
          >
            <IoMdSend size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDialog;
