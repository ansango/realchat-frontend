import { useSelector } from "react-redux";
import { Faq } from "./Faq";

export const Process = () => {
  const state = useSelector((state) => state.ProcessReducer);
  return (
    <Faq title="Your messages are encrypted">
      <div>
        <h4 className="font-medium">Your encrypted message:</h4>
        <p>{state.cypher}</p>
      </div>
      <div>
        <h4 className="font-medium">Your decrypted message:</h4>
        <p>{state.text}</p>
      </div>
    </Faq>
  );
};
