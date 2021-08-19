export const FormInput = ({
  type = "text",
  placeholder = "Placeholder",
  value = "",
  onChange = null,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    name={value}
    value={value}
    onChange={onChange}
    className="mx-2 block rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-900"
  />
);
