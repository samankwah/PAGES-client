/* eslint-disable react/prop-types */
import { BsChatDots } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";

export const ChatButton = ({ show, showBtn }) => {
  return (
    <button
      className="rounded-full p-3 m-3 text-white font-extrabold shadow-xl animate-pulse  bg-gradient-to-r from-green-700 to-blue-700"
      onClick={() => showBtn()}
    >
      <BsChatDots size={30} />
    </button>
  );
};

export const CallButton = ({}) => {
  return (
    <button className="rounded-full p-3 m-3 text-white font-extrabold shadow bg-blue-600">
      <BiSolidPhoneCall size={30} />
    </button>
  );
};

export const FaqsButton = ({}) => {
  return (
    <button className="rounded-full p-3 m-3 text-white font-extrabold shadow bg-gray-700">
      <h4 className="text-.g font-bold">FAQs</h4>
      {/* <FaQuestion size={30} /> */}
    </button>
  );
};

export const VideosButton = () => {
  return (
    <button className="rounded-full p-3 m-3 text-white font-extrabold shadow bg-gray-700">
      <MdOndemandVideo size={30} />
    </button>
  );
};
