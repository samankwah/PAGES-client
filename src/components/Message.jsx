/* eslint-disable react/prop-types */

const Message = ({ message }) => {
  return (
    <>
      {message.isBot ? (
        <div className="flex items-end justify-start py-3">
          <div
            className="
                flex flex-col
                space-y-4
                text-md
                max-w-xs
                mx-2
                order-2
                items-start
                shadow-lg
                rounded-lg
                m-1
               
              "
          >
            <span
              className="
                    px-4
                    py-2
                   rounded-lg
                    inline-block
                    dark:bg-blue-600
                    dark:text-white
                    bg-green-500
                    text-white
                  "
            >
              {message.text}
            </span>
          </div>
          {/* <i className="fas fa-desktop w-6 h-6 dark:text-white  rounded-full order-1" /> */}
        </div>
      ) : (
        <div className="flex items-end py-3 justify-end">
          <div
            className="
                flex flex-col
                space-y-4
                text-md
                max-w-xs
                mx-2
                order-1
                items-end
                shadow-lg
                rounded-lg
                m-1
              "
          >
            <span
              className="
                    px-4
                    py-2
                    rounded-lg
                    inline-block
                    dark:bg-orange-400
                    dark:text-white
                    bg-indigo-500
                    text-white
                  "
            >
              {message.text}
            </span>
          </div>
          {/* <i className="fas fa-user w-6 h-6 dark:text-white  rounded-full order-1" /> */}
        </div>
      )}
    </>
  );
};

export default Message;
