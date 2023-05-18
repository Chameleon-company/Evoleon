import React, { useContext } from "react";
import { LocationContext } from "./locations.context";

// MarkerItem component that makes use of LocationContext to retrieve and filter questions
const MarkerItem = ({ searchQues }) => {
  // Destructure question from the LocationContext
  const { question } = useContext(LocationContext);

  // Convert question object into an array of keys and filter them based on searchQues
  const filtQuestions = Object.keys(question).filter(ques =>
    ques.toLowerCase().includes(searchQues.toLowerCase())
  );

  return (
    <div>
      {filtQuestions.map((test) => {
        const [lat, long] = question[test];
        return (
          <div key={test} lat={lat} long={long}>
            <p>{lat}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MarkerItem;
