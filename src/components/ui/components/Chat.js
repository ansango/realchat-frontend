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
    <div>
      <div>
        <h2>
          {userName} <span style={{ fontSize: "0.7rem" }}>in {roomName}</span>
        </h2>
      </div>
      <div>
        {messages.map((i) => {
          if (i.userName === userName) {
            return (
              <div className="message">
                <p>{i.text}</p>
                <span>{i.userName}</span>
              </div>
            );
          } else {
            return (
              <div className="message mess-right">
                <p>{i.text} </p>
                <span>{i.userName}</span>
              </div>
            );
          }
        })}
        <div ref={messagesEndRef} />
      </div>
      <div>
        <input
          placeholder="enter your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendData();
            }
          }}
        ></input>
        <button onClick={sendData}>Send</button>
      </div>
    </div>
  );
};
