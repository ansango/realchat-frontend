export const Message = ({ isUser, message }) => {
  return (
    <>
      {isUser && (
        <div className="flex flex-col p-2 max-w-xs mr-0 ml-auto">
          <p className=" rounded-lg p-4 bg-blue-400 text-blue-200 font-light ">
            {message.text}
          </p>
          <span className="pr-2 text-right text-green-900 text-xs font-light">
            {message.userName}
          </span>
        </div>
      )}
      {!isUser && (
        <div className="max-w-xs pl-2 py-1 ml-0">
          <p className=" rounded-lg p-4 bg-blue-400 text-blue-200 font-light ">
            {message.text}
          </p>
          <span className="pl-2 text-green-900 text-xs font-light">
            {message.userName}
          </span>
        </div>
      )}
    </>
  );
};
