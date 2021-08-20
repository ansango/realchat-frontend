import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { process } from "../../../../store/action";
import { decrypt, encrypt } from "../../../../helpers/aes";
import { FormInput } from "../../forms";
import { ButtonBase } from "../../buttons/ButtonBase";
import { useForm } from "../../../../hooks/useForm";
import { Message } from "./Message";

export const Chat = ({ userName, roomName, socket }) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  const [formValues, handleInputChange, reset] = useForm({
    text: "",
  });
  const { text } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length !== 0) {
      const ans = encrypt(text);
      socket.emit("chat", ans);
      reset();
    }
  };

  const dispatch = useDispatch();
  const dispatchProcess = (encrypt, msg, cypher) => {
    dispatch(process(encrypt, msg, cypher));
  };

  useEffect(() => {
    socket.on("message", (data) => {
      console.log("a", data);
      const ans = decrypt(data.text, data.userName);
      dispatchProcess(false, ans, data.text);
      let temp = messages;
      temp.push({
        userId: data.userId,
        userName: data.userName,
        text: ans,
      });
      setMessages([...temp]);
    });
  }, [socket]);

  return (
    <div
      className="flex p-4 justify-between flex-col bg-blue-50"
      style={{ height: "800px" }}
    >
      <div className="w-full text-left">
        <h2 className="border-b border-blue-100 pb-4">
          {userName} <span style={{ fontSize: "0.7rem" }}>in {roomName}</span>
        </h2>
      </div>
      <div className="h-4/5 flex overflow-y-auto content-start w-full flex-col">
        {messages.map((message, index) => {
          if (message.userName === userName) {
            return <Message isUser key={index} message={message} />;
          } else {
            return <Message key={index} message={message} />;
          }
        })}
        <div ref={messagesEndRef} />
      </div>
      <form className="grid" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Enter your message"
          name="text"
          value={text}
          onChange={handleInputChange}
        />

        <ButtonBase type="submit">Submit</ButtonBase>
      </form>
    </div>
  );
};
