import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
// import 'bootstrap/dist/css/bootstrap.min.css';


import App from "./App.jsx";
import store from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let persistore = persistStore(store);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
