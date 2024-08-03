import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import ChatDialog from "../interfaces/ChatDialog";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <ChatDialog />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
