import React from "react";

const FormGroup = ({
  label,
  f,
  value,
  id,
  type = "text",
  ClassName = "",
  inputClassName = "",
  labelClassName = "",
}: {
  type?: string;
  label: string;
  f: any;
  value: any;
  id: string;
  ClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
}) => {
  return (
    <div className={"flex flex-col items-center justify-center" + ClassName}>
      <label className="w-full text-lg font-bold text-left" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className={
          "border border-black text-center bg-yellow-400 placeholder:text-black hover:bg-yellow-500 transition-all skew-x-6 outline-none focus:bg-yellow-600 selection:bg-yellow-800 selection:text-white p-1" +
          inputClassName
        }
        id={id}
        placeholder={label}
        value={value}
        onChange={e => f(e.target.value)}
      />
    </div>
  );
};

export default FormGroup;
