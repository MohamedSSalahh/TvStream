import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persisttor } from "./redux/store.js";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisttor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
