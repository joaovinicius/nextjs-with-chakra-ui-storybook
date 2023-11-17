export interface InputProps {
  name: string;
  placeholder: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
}
