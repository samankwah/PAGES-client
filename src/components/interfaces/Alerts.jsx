import { useState } from "react";
import { FaBell } from "react-icons/fa";

const Alert = ({ message, onClose }) => (
  <div className="flex items-center justify-between bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative my-2">
    <span className="block sm:inline">{message}</span>
    <span
      className="absolute top-0 bottom-0 right-0 px-4 py-3"
      onClick={onClose}
    >
      <svg
        className="fill-current h-6 w-6 text-blue-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M14.348 14.849a1 1 0 001.415-1.415l-4.243-4.243 4.243-4.243a1 1 0 10-1.415-1.415l-4.243 4.243-4.243-4.243a1 1 0 10-1.415 1.415l4.243 4.243-4.243 4.243a1 1 0 101.415 1.415l4.243-4.243 4.243 4.243z" />
      </svg>
    </span>
  </div>
);

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (message) => {
    setAlerts([...alerts, { id: Date.now(), message }]);
  };

  const removeAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="flex flex-col items-center h-full p-4">
      <h4 className="font-bold text-2xl mb-4">Alertes</h4>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md mb-4"
        onClick={() => addAlert("This is a new alert!")}
      >
        <FaBell className="inline mr-2" /> Ajouter une alerte
      </button>
      <div className="w-full max-w-md">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            message={alert.message}
            onClose={() => removeAlert(alert.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Alerts;
