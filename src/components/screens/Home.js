import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { ButtonBase } from "../ui/buttons/ButtonBase";
import { FormLabel, FormInput } from "../ui/forms";

export const Home = ({ socket }) => {
  const router = useHistory();

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
    router.push(`/chat/${roomName}/${userName}`);
  };

  return (
    <>
      <h1 className="capitalize py-20 text-2xl lg:text-4xl font-bold text-center">
        Welcome to roomers 🏠
      </h1>
      <form className="grid grid-cols-1 gap-2 lg:py-20" onSubmit={handleSubmit}>
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
