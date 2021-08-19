import { useForm } from "../../hooks/useForm";
import { ButtonBase } from "../ui/buttons/ButtonBase";
import { FormLabel, FormInput } from "../ui/forms";

export const Home = ({ socket }) => {
  const [formValues, handleInputChange] = useForm({
    userName: "",
    roomName: "",
  });
  const { userName, roomName } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || roomName.trim().length === 0) {
      alert("Please enter user and room!");
      return;
    }
    socket.emit("joinRoom", { userName, roomName });
  };

  return (
    <>
      <form className="grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
        <FormLabel name="User name" />
        <FormInput
          type="text"
          placeholder="Enter your username"
          name="userName"
          value={userName}
          onChange={handleInputChange}
        />
        <FormLabel name="Room name" />
        <FormInput
          type="text"
          placeholder="Enter a Room's key"
          name="roomName"
          value={roomName}
          onChange={handleInputChange}
        />
        <ButtonBase type="submit">Submit</ButtonBase>
      </form>
    </>
  );
};
