import { FC } from "react";
import { IInputProps } from "@/types/components/IInputProps";
import style from "./Input.module.css";

const Input: FC<IInputProps> = ({
  className = "",
  value,
  onChange,
  name,
  placeholder = "",
  type = "text",
  label,
  requierd = false,
}) => {
  return (
    <div className={style.inputContainer}>
      {label && <label className={style.label}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={`${style.input} ${className}`}
        maxLength={30}
        required={requierd}
      />
    </div>
  );
};

export default Input;
