// PARTS
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
// CONTEXT
import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
