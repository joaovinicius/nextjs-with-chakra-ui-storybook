import AtomButton from "@/components/Atoms/Button";
import { Form } from "@/components/Organismo/Form/form";
import { Flex } from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex marginY={'auto'} justifyContent={'center'}>
      <Flex minW={'25%'} justifyContent={'center'} flexDir={'column'}>
        <Form />
        <AtomButton />
      </Flex>
    </Flex>
  );
}
