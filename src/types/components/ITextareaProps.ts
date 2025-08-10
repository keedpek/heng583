export interface ITextareaProps {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  placeholder?: string;
  label?: string;
  requierd?: boolean;
}
