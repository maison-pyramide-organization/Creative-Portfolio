import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import "@s/global/index.scss";
import App from "./App.tsx";
import Grid from "@c/grid/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <React.StrictMode>
            <Grid />
            <ReactLenis root>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ReactLenis>
        </React.StrictMode>
    </>
);
