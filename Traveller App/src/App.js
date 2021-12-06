import { GlobalProvider } from "./context/global";
import Home from "./page/Home";


function App() {
  return (
    <GlobalProvider>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    </style><Home />
    </GlobalProvider>
  );
}

export default App;
