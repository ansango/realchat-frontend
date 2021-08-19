import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { process } from "../../../store/action";
import { decrypt, encrypt } from "../../../helpers/aes";

export const Chat = ({ userName, roomName, socket }) => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const dispatch = useDispatch();
  const dispatchProcess = (encrypt, msg, cypher) => {
    dispatch(process(encrypt, msg, cypher));
  };

  useEffect(() => {
    socket.on("message", (data) => {
      // decrypt
      const ans = decrypt(data.text, data.userName);
      dispatchProcess(false, ans, data.text);
      console.log(ans);
      let temp = messages;
      temp.push({
        userId: data.userId,
        userName: data.userName,
        text: ans,
      });
      setMessages([...temp]);
    });
  }, [socket]);

  const sendData = () => {
    if (text !== "") {
      //encrypt the message here
      const ans = encrypt(text);
      socket.emit("chat", ans);
      setText("");
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  console.log(messages, "mess");

  return (
    <div className="flex p-4 justify-between h-96 flex-col bg-blue-200">
      <div className="w-full text-left">
        <h2 className="border-b border-blue-100 pb-4">
          {userName} <span style={{ fontSize: "0.7rem" }}>in {roomName}</span>
        </h2>
      </div>
      <div className="h-4/5 flex overflow-y-auto content-start w-full flex-col">
        {messages.map((i) => {
          if (i.userName === userName) {
            return (
              <div className="pl-2 max-w-xs ml-0">
                <p className="text-blue-200 text-base font-light bg-blue-400 rounded-lg p-4">
                  {i.text}
                </p>
                <span className="text-green-900 text-xs pl-2 font-extralight">
                  {i.userName}
                </span>
              </div>
            );
          } else {
            return (
              <div className="pl-2 max-w-xs flex ml-auto flex-col pr-2 mr-0">
                <p className="text-blue-200 text-base font-light bg-blue-400 rounded-lg p-4">
                  {i.text}
                </p>
                <span className="text-green-900 text-xs pl-2 font-extralight">
                  {i.userName}
                </span>
              </div>
            );
          }
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="h-12 flex">
        <input
          className="bg-blue-100 w-3/4 pl-4 rounded-md"
          placeholder="enter your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendData();
            }
          }}
        ></input>
        <button className="bg-blue-900 w-1/4 rounded-lg" onClick={sendData}>Send</button>
      </div>
    </div>
  );
};
