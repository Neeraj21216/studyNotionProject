import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router";
import {Provider} from "react-redux"
 import rootReducer  from "./reducer";
 import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from "react-hot-toast";
const store=configureStore({
  reducer:rootReducer,
});
//what would you like to do is again a myth

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>

);
