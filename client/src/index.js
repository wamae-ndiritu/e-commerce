import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { AppProvider } from "./contextAPI/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
);
