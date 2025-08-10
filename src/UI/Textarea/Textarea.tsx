import { FC } from "react";
import style from "./Textarea.module.css";
import { ITextareaProps } from "@/types/components/ITextareaProps";

const Textarea: FC<ITextareaProps> = ({
  className = "",
  value,
  onChange,
  name,
  placeholder = "",
  label,
  requierd = false,
}) => {
  return (
    <div className={style.textareaContainer}>
      {label && <label className={style.label}>{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={`${style.textarea} ${className}`}
        maxLength={100}
        required={requierd}
      />
    </div>
  );
};

export default Textarea;
