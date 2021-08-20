export const FormInput = ({
  type = "text",
  placeholder = "Placeholder",
  name = "",
  value = "",
  onChange = null,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    className="mx-2 block rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-900 dark:focus:bg-gray-100"
  />
);
