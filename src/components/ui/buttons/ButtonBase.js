export const ButtonBase = ({ children, onClick, kind = "default" }) => {
  const isDefault = kind === "default";
  const isDanger = kind === "danger";
  const isWarning = kind === "warning";
  const isSuccess = kind === "success";
  const isBlank = kind === "blank";
  return (
    <>
      {isDefault && <Default children={children} onClick={onClick} />}
      {isDanger && <Danger children={children} onClick={onClick} />}
      {isWarning && <Warning children={children} onClick={onClick} />}
      {isSuccess && <Success children={children} onClick={onClick} />}
      {isBlank && <Blank children={children} onClick={onClick} />}
    </>
  );
};

const Default = ({ children, onClick }) => (
  <button
    className={`text-blue-800 dark:text-blue-300 bg-blue-200 border-blue-200 hover:bg-blue-500 hover:text-white dark:bg-blue-900 dark:border-blue-900 dark:hover:bg-blue-900 w-auto px-3 py-2 m-2 text-base font-medium transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Danger = ({ children, onClick }) => (
  <button
    className="text-red-800 dark:text-red-300 bg-red-200 border-red-200 hover:bg-red-500 hover:text-white dark:bg-red-900 dark:border-red-900 dark:hover:bg-red-900 w-auto px-3 py-2 m-2 text-base font-medium transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
    onClick={onClick}
  >
    {children}
  </button>
);

const Warning = ({ children, onClick }) => (
  <button
    className="text-yellow-800 dark:text-yellow-300 bg-yellow-200 border-yellow-200 hover:bg-yellow-500 hover:text-white dark:bg-yellow-900 dark:border-yellow-900 dark:hover:bg-yellow-900 w-auto px-3 py-2 m-2 text-base font-medium transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
    onClick={onClick}
  >
    {children}
  </button>
);

const Success = ({ children, onClick }) => (
  <button
    className="text-green-800 dark:text-green-300 bg-green-200 border-green-200 hover:bg-green-500 hover:text-white dark:bg-green-900 dark:border-green-900 dark:hover:bg-green-900 w-auto px-3 py-2 m-2 text-base font-medium transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
    onClick={onClick}
  >
    {children}
  </button>
);

const Blank = ({ children, onClick }) => (
  <button
    className="bg-white border-gray-200 hover:bg-gray-200 dark:bg-gray-900 dark:border-gray-900 hover:text-white dark:hover:bg-gray-900 w-auto px-3 py-2 m-2 text-base font-medium transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
    onClick={onClick}
  >
    {children}
  </button>
);
