import React from "react";

const Button = ({
  ClassName = "",
  handler,
  text = "Add",
}: {
  ClassName?: string;
  handler: any;
  text?: string;
}) => {
  return (
    <button className={ClassName + ""} onClick={e => handler(e)}>
      {text}
    </button>
  );
};

export default Button;
