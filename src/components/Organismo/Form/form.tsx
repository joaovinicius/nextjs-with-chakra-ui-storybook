import { CheckBox } from "@/components/Atoms/Checkbox/checkbox";
import { Input } from "@/components/Atoms/Input/input";
import { Link } from "@/components/Atoms/Link/link";
import { PasswordInput } from "@/components/Atoms/PasswordInput/password-input";
import { Flex } from "@chakra-ui/react";
import React from "react";

export const Form: React.FC = () => {
  return (
    <form>
      <Input
        name={"email"}
        placeholder={"Digite seu e-mail"}
        label={"Enter your Email"}
        value={""}
        onChange={() => console.log("teste")}
      />
      <PasswordInput
        name={"password"}
        placeholder={"Digite sua senha"}
        label={"Enter your password"}
        value={""}
        onChange={() => console.log("teste")}
        showPasswordIcon={true}
      />
      <Flex justifyContent={'space-between'}>
        <CheckBox label={"Remember Me"} onChange={() => console.log('teste')}/>
        <Link text={'Recover password'} href='#' onLinkClick={() => console.log('teste')}/>
      </Flex>
      
    </form>
  );
};
