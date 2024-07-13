import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";

// import { ThemeComponent } from "./configs/theme/ThemeComponent.tsx";

import "./configs/i18n";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")! as HTMLElement).render(
  <Router>
    {/* <ThemeComponent> */}
    <App />
    {/* </ThemeComponent> */}
  </Router>
);
