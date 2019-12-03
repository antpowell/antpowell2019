import React from "react";

const ButtonGroup = ({ names, color, bgColor }) => {
  const btnStyle =
    "bg-transparent-700 hover:bg-purple-700 text-purple border border-purple-300 font-bold py-2 px-4 mx-2 rounded";

  const nameList = names.map((name, index) => {
    return (
      <button key={index} className={btnStyle}>
        {name}
      </button>
    );
  });

  return <div>{nameList}</div>;
};

export default ButtonGroup;
