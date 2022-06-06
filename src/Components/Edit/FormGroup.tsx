import React from "react";

const FormGroup = ({
  label,
  f,
  value,
  id,
  type,
  ClassName = "",
  inputClassName = "",
}: {
  label: string;
  f: any;
  value: any;
  id: string;
  ClassName?: string;
  type: string;
  inputClassName?: string;
}) => {
  return (
    <div className={"" + ClassName}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={"" + inputClassName}
        id={id}
        placeholder={label}
        value={value}
        onChange={e => f(e.target.value)}
      />
    </div>
  );
};

export default FormGroup;
