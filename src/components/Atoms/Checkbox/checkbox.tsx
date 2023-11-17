import { Checkbox as ChackraCheckBox } from "@chakra-ui/react";

interface Props {
  label: string;
  onChange: () => void;
}

export const CheckBox: React.FC<Props> = ({ label, onChange }) => {
  return <ChackraCheckBox>{label}</ChackraCheckBox>;
};
