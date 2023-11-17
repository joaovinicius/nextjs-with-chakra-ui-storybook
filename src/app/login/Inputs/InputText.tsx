import React from 'react'
import InputProps from './InputProps'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const InputText: React.FC<InputProps> = ({placeholder, label, name, value, onChange}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input placeholder={placeholder} name={name} value={value} onChange={onChange}></Input>
    </FormControl>
  )
}

export default InputText