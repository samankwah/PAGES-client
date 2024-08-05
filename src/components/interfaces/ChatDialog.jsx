/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import Messages from "../Messages";
import { ImAttachment } from "react-icons/im";
import { IoMdSend, IoMdClose } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { IoMdCall } from "react-icons/io";

const ChatDialog = ({ show, setShow }) => {
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
    <div
      className={`${
        show ? "flex" : "hidden"
      } flex justify-end px-3 mx-auto relative`}
    >
      <div className="fixed bottom-[30px] z-50 h-[80%] flex flex-col justify-between w-full max-w-xs pb-4 my-2 bg-gray-100 shadow-sm lg:max-w-md dark:bg-gray-900 rounded-xl">
        <div className="flex relative justify-between w-full align-middle px-5 bg-white rounded-t-xl border shadow-lg">
          <button
            onClick={() => setShow()}
            className="absolute -top-12 right-0 bg-gray-400 rounded-full p-2 text-gray-900 hover:text-gray-700"
          >
            <IoMdClose size={25} />
          </button>
          <div className="flex gap-8 justify-center align-middle items-center py-4">
            <div className="relative flex bg-blue-600 text-white rounded-full p-3">
              <BsChatDots size={45} />
              <RxDotFilled
                size={35}
                className="absolute -bottom-2 -right-2 text-green-600 "
              />
            </div>
            <div className="flex flex-col ">
              <h4 className="font-bold text-2xl text-gray-700">
                Customer Care
              </h4>
              <p className="text-gray-500 text-lg">online</p>
            </div>
          </div>

          <button>
            <IoMdCall
              size={35}
              className="text-green-600 hover:text-green-700"
            />
          </button>
        </div>

        <div className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch h-full scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2">
          <Messages messages={responses} />
        </div>

        <div className="flex flex-col gap-2 px-3 py-2 border-t-2 border-gray-200 dark:border-gray-600">
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
              className="font-extrabold flex items-center text-white cursor-pointer"
              title="Attach document"
            >
              <ImAttachment size={25} />
              <input
                type="file"
                className="hidden"
                onChange={handleFileAttachment}
              />
            </label>
            <div className="w-full px-2 py-2 bg-white rounded-lg shadow-sm dark:bg-gray-800 lg:max-w-lg">
              <input
                type="text"
                value={currentMessage}
                onChange={handleMessageChange}
                onKeyDown={handleSubmit}
                placeholder="Enter your message here"
                className="block w-full py-2 pl-3 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-900 dark:text-white dark:placeholder-gray-100 focus:outline-none focus:text-gray-900 dark:focus:text-white focus:placeholder-gray-400 dark:focus:placeholder-white focus:ring-1 focus:ring-indigo-300 sm:text-sm"
              />
            </div>
            <button
              className={`font-extrabold ${
                currentMessage.trim() || attachedFile
                  ? "text-green-500"
                  : "text-gray-500"
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
    </div>
  );
};

export default ChatDialog;
