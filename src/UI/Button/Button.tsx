import React, { FC } from "react";
import style from "./Button.module.css";
import { ButtonProps } from "@/types/components/IButtonProps";

const Button: FC<ButtonProps> = ({
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
