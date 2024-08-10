import { FaPhone } from "react-icons/fa";

const Call = () => {
  return (
    <div className="flex flex-col items-center h-full p-4 bg-gray-100 rounded-lg shadow-lg">
      <h4 className="font-bold text-2xl mb-4">Contactez nous</h4>
      <div className="w-full max-w-md">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <div>
            <h5 className="font-semibold text-lg">
              Déclaration contribuables professionnels
            </h5>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <div>
            <h5 className="font-semibold text-lg">
              Déclaration sur les revenus des personnes physiques{" "}
            </h5>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <div>
            <h5 className="font-semibold text-lg">DSF</h5>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <div>
            <h5 className="font-semibold text-lg">IMPÔT LIBÉRATOIRE</h5>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <div>
            <h5 className="font-semibold text-lg">AIDE GÉNÉRAL</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
