export interface IButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "reset" | "submit";
  size?: "s" | "m" | "l";
  className?: string;
  onClick?: () => void;
}
