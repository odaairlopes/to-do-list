import GlobalStyle from "./styles/globalStyles";
import { Router } from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
