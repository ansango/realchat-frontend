import React from "react";
import { useForm } from "../../../hooks/useForm";
import { FormInput } from "../forms/FormInput";

export const Login = () => {
  const [formValues, handleInputChange] = useForm({
    userName: "",
    roomName: "",
  });
  const { userName, roomName } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <form className="grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        placeholder="Enter your username"
        name={userName}
        value={userName}
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        placeholder="Enter a Room's key"
        name={roomName}
        value={roomName}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
