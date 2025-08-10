import { FC } from "react";
import style from "./Button.module.css";
import { IButtonProps } from "@/types/components/IButtonProps";

const Button: FC<IButtonProps> = ({
  children,
  variant = "primary",
  type = "button",
  size = "m",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`${style.button} ${style[variant]} ${style[size]} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
