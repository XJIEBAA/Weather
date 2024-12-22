import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/App"
import styles from "./css/style.css"

import store from "../store/store.js"

import { Provider } from "react-redux"

createRoot(document.getElementById("root")).render(<Provider store={store}><App></App></Provider>)