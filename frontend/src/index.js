import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from "react-redux";
import generateStore from "./redux/store";

const store = generateStore();

const el = document.getElementById("app");

ReactDOM.render(<Provider store={store}><App /></Provider>, el);