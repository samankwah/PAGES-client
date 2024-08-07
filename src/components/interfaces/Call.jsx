import {
  FaPhone,
  FaFax,
  FaEnvelope,
  FaBuilding,
  FaMailBulk,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Call = () => {
  return (
    <div className="flex flex-col items-center h-full p-4 bg-gray-100 rounded-lg shadow-lg">
      <h4 className="font-bold text-2xl mb-4">Contact Us</h4>
      <div className="w-full max-w-md">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <FaPhone className="text-green-500 w-6 h-6 mr-4" />
          <div>
            <h5 className="font-semibold text-lg">Telephone Number</h5>
            <p className="text-gray-700">+1 (123) 456-7890</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <FaFax className="text-blue-500 w-6 h-6 mr-4" />
          <div>
            <h5 className="font-semibold text-lg">Fax Number</h5>
            <p className="text-gray-700">+1 (123) 456-7891</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <FaEnvelope className="text-red-500 w-6 h-6 mr-4" />
          <div>
            <h5 className="font-semibold text-lg">Email</h5>
            <p className="text-gray-700">support@example.com</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <FaBuilding className="text-yellow-500 w-6 h-6 mr-4" />
          <div>
            <h5 className="font-semibold text-lg">Head Office</h5>
            <p className="text-gray-700">123 Main Street, Anytown, USA</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <FaMailBulk className="text-purple-500 w-6 h-6 mr-4" />
          <div>
            <h5 className="font-semibold text-lg">Postal Address</h5>
            <p className="text-gray-700">PO Box 123, Anytown, USA 12345</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <FaMapMarkerAlt className="text-orange-500 w-6 h-6 mr-4" />
          <div>
            <h5 className="font-semibold text-lg">Physical Address</h5>
            <p className="text-gray-700">123 Main Street, Anytown, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
