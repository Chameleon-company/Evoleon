import React, { useContext } from "react";
import { LocationContext } from "./locations.context";

function MarkerItem(props) {
  const { question } = useContext(LocationContext);

  const newList = Object.keys(question);

  const filtQuestions = newList.filter((ques) => {
    return ques.toLowerCase().includes(props.searchQues.toLowerCase());
  });

  return (
    <div>
      {filtQuestions.map((test) => (
        <div lat={question[test][0]} long={question[test][1]}>
          <p>{lat}</p>
        </div>
      ))}
    </div>
  );
}

export default MarkerItem;
