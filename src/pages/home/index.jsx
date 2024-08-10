import { useState } from "react";
import Navbar from "../../components/Navbar";
import ChatDialog from "../../components/interfaces/ChatDialog";
import Videos from "../../components/interfaces/Videos";
import Call from "../../components/interfaces/Call";

const Home = () => {
  const [interfaceToShow, setInterfaceToShow] = useState("chat");

  return (
    <div className="relative bg-gray-100 shadow-xl border lg:max-w-lg mx-auto md:rounded-xl h-screen flex flex-col">
      <Navbar
        interfaceToShow={interfaceToShow}
        setInterfaceToShow={setInterfaceToShow}
      />
      <div className="flex-1 overflow-y-auto bg-white">
        {interfaceToShow === "chat" && <ChatDialog />}
        {interfaceToShow === "call" && <Call />}
        {interfaceToShow === "videos" && <Videos />}
      </div>
    </div>
  );
};

export default Home;
