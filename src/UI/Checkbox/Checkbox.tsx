import { FC } from "react";
import style from "./Checkbox.module.css";
import { ICheckboxProps } from "@/types/components/ICheckboxProps";

const Checkbox: FC<ICheckboxProps> = ({
  className = "",
  checked,
  onChange,
  name,
  label,
  requierd = false,
}) => {
  return (
    <div className={style.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        className={className}
        required={requierd}
      />
      {label && <label className={style.label}>{label}</label>}
    </div>
  );
};

export default Checkbox;
