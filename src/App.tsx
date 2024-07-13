// import "./App.css";
import { Provider } from "react-redux";
import { Routes } from "./routes";
import { ApiProvider } from "./utils/contexts/Api";
import { AuthProvider } from "./utils/contexts/Auth";
import { store } from "./utils/store";

function App() {
  return (
    <AuthProvider>
      <ApiProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ApiProvider>
    </AuthProvider>
  );
}

export default App;
