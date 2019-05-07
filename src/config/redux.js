import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from "redux-thunk";

import rootReducer from "../redux";
import { PRODUCTION } from "./constants";

process.env.NODE_ENV === `development` && require("axios-response-logger");

const persistConfig = {
  key: "root",
  storage
};

const loggerMiddleware = createLogger({
  collapsed: true
});

const middlewares = PRODUCTION
  ? applyMiddleware(thunk)
  : applyMiddleware(thunk, loggerMiddleware);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configurePersistStore = () => {
  let store = createStore(persistedReducer, middlewares);
  let persistor = persistStore(store);
  return { store, persistor };
};

const { store, persistor } = configurePersistStore();

export { store, persistor };
