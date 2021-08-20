import { useSelector } from "react-redux";

export const Process = () => {
  const state = useSelector((state) => state.ProcessReducer);
  return (
    <div className="p-5 rounded-lg border border-blue-300 my-10 space-y-4">
      <div>
        <h4 className="font-medium">Your encrypted message:</h4>
        <p>{state.cypher}</p>
      </div>
      <div>
        <h4 className="font-medium">Your decrypted message:</h4>
        <p>{state.text}</p>
      </div>
    </div>
  );
};
