import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "./app/store"

const theme = {
    colors: {
        main: "#78b3d8",
        mainDimmed: "#9cbbce",
        mainSecondary: "#132020",
        error: "#c93c38",
        background: "#f7fdff",
        secondaryBackground: "#240D0A",
        text: "#10132c",
        textDimmed: "#34353d",
        secondaryText: "#10161a",
    },
    sizes: {
        small: "520px",
        medium: "800px",
        large: "1200px",
    },
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
