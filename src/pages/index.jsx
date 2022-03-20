import { BrowserRouter as Router } from "react-router-dom";
import {MainRoutes as Routes} from "../routes/Routes";

// import {SignUp} from '../compoennts/SignUp';
import { UsersProvider } from "../contexts/UsersContext";

import { Container } from "./style";

export const App = () => {
  return (
    <Router>
      <Container>
        <UsersProvider>
          <Routes/>
          {/* <SignUp/> */}
          </UsersProvider>
      </Container>
    </Router>
  );
};
