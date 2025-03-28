import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./store";
import { Provider } from "react-redux";
import "@ant-design/v5-patch-for-react-19";

const store = setupStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={"/quiz"}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
