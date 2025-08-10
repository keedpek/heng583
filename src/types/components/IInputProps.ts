export interface IInputProps {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  type?: string;
  label?: string;
  requierd?: boolean;
}
