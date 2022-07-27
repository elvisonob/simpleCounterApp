import React from "react";
import ReactDOM from "react-dom/client";
import CounterPage from "./components/CounterPage.js";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<CounterPage />);
