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
        <List
          id={question[test][2]}
          lat={question[test][0]}
          long={question[test][1]}
        />
      ))}
    </div>
  );
}

export default MarkerItem;
