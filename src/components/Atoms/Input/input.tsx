import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";
import { InputProps } from "./input-props";

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  value,
  label,
  onChange
}) => {
  return (
    <FormControl isInvalid={false}>
      <FormLabel>{label}</FormLabel>
      <ChakraInput name={name} placeholder={placeholder} value={value} />
    </FormControl>
  )
}
