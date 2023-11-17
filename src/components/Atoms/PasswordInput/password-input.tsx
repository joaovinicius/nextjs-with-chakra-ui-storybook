import { Input } from "../Input/input";
import { PasswordInputProps } from "./password-input-props";

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  return <Input {...props} />;
};
