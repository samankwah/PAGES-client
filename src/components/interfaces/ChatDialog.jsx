/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Messages from "../Messages";
import { ImAttachment } from "react-icons/im";
import { IoMdSend, IoMdClose } from "react-icons/io";
import {
  startChatSession,
  getChatSession,
  sendMessage,
} from "../../services/message";

const ChatDialog = () => {
  const [responses, setResponses] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [botResponseLoading, setBotResponseLoading] = useState(false);

  const [inputHeight, setNavbarHeight] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      setNavbarHeight(inputRef.current.offsetHeight);
    }
  }, []);

  const startNewSession = async () => {
    try {
      const res = await startChatSession();
      console.log("New Session=-->", res);

      if (res.status === 201) {
        // Store the session ID in localStorage
        window.localStorage.setItem("chatSessionId", res.data.sessionId);
        setSessionId(res.data.sessionId);
      } else {
        console.warn("Unexpected response status:", res.status);
      }
    } catch (error) {
      console.error("Error starting new session:", error);
    }
  };

  const fetchChatSession = async (sessionId) => {
    try {
      const res = await getChatSession(sessionId);
      const oldChat = [];
      console.log("Chat session--->", res);
      res.data.map((d) => {
        if (d.sender === "user") {
          oldChat.push({
            text: d.content,
            isBot: false,
          });
        } else {
          oldChat.push({
            text: d.content,
            isBot: true,
          });
        }
        setResponses(oldChat);
      });
    } catch (error) {
      console.log("Error fetching chat session", error);
    }
  };

  const createOrFetchChatSession = async () => {
    try {
      const chatSessionId = window.localStorage.getItem("chatSessionId");

      if (chatSessionId) {
        // Fetch existing chat session
        await fetchChatSession(chatSessionId);
        setSessionId(chatSessionId);
      } else {
        // Start a new session if no session ID is found
        await startNewSession();
      }
    } catch (error) {
      console.error("Error in createOrFetchChatSession:", error);
    }
  };

  useEffect(() => {
    createOrFetchChatSession();
  }, []);

  const handleMessageSubmit = async (message, file) => {
    setBotResponseLoading(true);
    try {
      const res = await sendMessage(sessionId, {
        messages: [{ sender: "user", content: message }],
      });

      const responseData = {
        text:
          res.data[1].content ||
          "Sorry, I can't get it. Can you please repeat once?",
        isBot: true,
      };
      setResponses((prevResponses) => [...prevResponses, responseData]);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setBotResponseLoading(false);
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
    <div className="">
      <div className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch h-full scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2">
        <Messages
          messages={responses}
          botResponseLoading={botResponseLoading}
        />
        {botResponseLoading ? (
          <div className="typing-dots py-5">
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          ""
        )}
      </div>

      <>
        <div ref={inputRef} className="absolute bottom-0 w-full bg-gray-100">
          <div className="flex w-full flex-col gap-2 px-3 py-3 border-t-2 border-gray-200 ">
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
              <div className="w-full p-[1px] rounded-lg shadow-sm bg-orange-500 lg:max-w-lg">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={handleMessageChange}
                  onKeyDown={handleSubmit}
                  placeholder="Entrez votre message ici"
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
        <div style={{ height: inputHeight }} className="bg-white"></div>
      </>
    </div>
  );
};

export default ChatDialog;
