import { useState } from "react";
import axios from "axios";
import Messages from "../Messages";
import ChatButton from "../ChatButton";
import { ImAttachment } from "react-icons/im";

const ChatDialog = () => {
  const [responses, setResponses] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [show, setShow] = useState(false);

  const showBtn = () => {
    setShow(!show);
  };

  const handleMessageSubmit = (message) => {
    const data = {
      message,
    };

    axios
      .post("http://localhost:3001/chatbot", data)
      .then((response) => {
        const responseData = {
          text:
            response.data["message"]["fulfillmentText"] !== ""
              ? response.data["message"]["fulfillmentText"]
              : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true,
        };
        setResponses((responses) => [...responses, responseData]);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false,
    };
    if (event.key === "Enter" && event.target.value !== "") {
      setResponses((responses) => [...responses, message]);
      handleMessageSubmit(message.text);
      setCurrentMessage("");
    }
  };

  return (
    <>
      <ChatButton show={show} showBtn={showBtn} />
      <div
        className={`${
          show ? "flex" : "hidden"
        } flex justify-end px-3 mx-auto relative`}
      >
        <div className="fixed bottom-[100px] z-50 h-[80%] flex flex-col justify-between w-full max-w-xs py-4 my-2 bg-gray-100 shadow-sm lg:max-w-md dark:bg-gray-900 rounded-xl">
          <div className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch h-full  scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2">
            <Messages messages={responses} />
          </div>

          <div className="flex gap-4 justify-between px-3 py-2 border-t-2 border-gray-200 dark:border-gray-600 ">
            <button
              className="font-extrabold text-white"
              title="Attach document"
            >
              <ImAttachment size={25} />
            </button>
            <div className="w-full px-2 py-2 bg-white rounded-lg shadow-sm dark:bg-gray-800 lg:max-w-lg ">
              <input
                type="text"
                value={currentMessage}
                onChange={handleMessageChange}
                onKeyDown={handleSubmit}
                placeholder="Enter your message here"
                className="block w-full py-2 pl-3 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-900 dark:text-white dark:placeholder-gray-100 focus:outline-none focus:text-gray-900 dark:focus:text-white focus:placeholder-gray-400 dark:focus:placeholder-white focus:ring-1 focus:ring-indigo-300 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatDialog;
