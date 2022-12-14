import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "../saga";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "reduxPersistState",
  timeout: 0,
  storage: storage,
  whitelist: ["login", "counter"],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
middleware.push(logger);

const store = configureStore({
  reducer: pReducer,
  middleware,
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export default store;
