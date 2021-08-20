export const Message = ({ isUser, message }) => {
  return (
    <>
      {isUser && (
        <div className="flex flex-col p-2 max-w-xs mr-0 ml-auto">
          <p className=" rounded-lg p-4 bg-blue-200 text-blue-800 dark:text-blue-300 dark:bg-blue-900 dark:border-blue-900">
            {message.text}
          </p>
          <span className="pr-2 text-right text-blue-600 text-sm font-light">
            {message.userName}
          </span>
        </div>
      )}
      {!isUser && (
        <div className="max-w-xs pl-2 py-1 ml-0">
          <p className=" rounded-lg p-4 bg-green-200 text-green-800 dark:text-green-300 dark:bg-green-900 dark:border-blue-900">
            {message.text}
          </p>
          <span className="pl-2 text-green-600 text-sm font-light">
            {message.userName}
          </span>
        </div>
      )}
    </>
  );
};
