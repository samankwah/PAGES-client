/* eslint-disable react/prop-types */
import { BsChatDots } from "react-icons/bs";

const ChatButton = ({ show, showBtn }) => {
  return (
    <>
      {!show ? (
        <button
          className="btnfloat rounded-full p-3 m-3 text-white font-extrabold shadow-xl animate-pulse  bg-gradient-to-r from-green-700 to-blue-700"
          onClick={() => showBtn()}
        >
          <BsChatDots size={30} />
        </button>
      ) : (
        <button
          className="btnfloat rounded-full p-3 m-3 text-white font-semibold shadow-xl  bg-gradient-to-r from-green-400 to-blue-500"
          onClick={() => showBtn(!show)}
        >
          <BsChatDots size={30} />
        </button>
      )}
    </>
  );
};

export default ChatButton;
