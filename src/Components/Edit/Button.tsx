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
    <button
      className={
        ClassName +
        " bg-yellow-400 px-3 font-light transition-all relative overflow-hidden before:absolute before:transition-transform before:-z-10 before:inset-0 before:bg-black hover:text-white before:duration-[350ms] before:ease-in-out duration-[350ms] hover:before:scale-x-100 hover:before:origin-left before:origin-right before:scale-x-0 [transform-style:preserve-3d] -skew-x-12 active:scale-95 text-xl"
      }
      onClick={e => handler(e)}
    >
      {text}
    </button>
  );
};

export default Button;
