// Importações necessárias
import { ChakraProvider, CSSReset, Box, Input, Button, FormControl, FormLabel, Stack } from "@chakra-ui/react";

// Componente de formulário de login
const LoginForm = () => {
  return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Stack spacing={4} width="300px">
          <FormControl>
            <FormLabel htmlFor="login">Login</FormLabel>
            <Input
              type="text"
              id="login"
              placeholder="Digite seu login"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </FormControl>

          <Button bg="primary" type="submit">
            Entrar
          </Button>
        </Stack>
      </Box>
  );
};

export default LoginForm;
