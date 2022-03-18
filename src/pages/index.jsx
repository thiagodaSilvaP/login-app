import { Form } from "./Form/";
import { UsersProvider } from "../contexts/UsersContext";

import { Container } from "./style";

export const App = () => {
  return (
    <Container>
      <UsersProvider>
        <Form />
      </UsersProvider>
    </Container>
  );
};
