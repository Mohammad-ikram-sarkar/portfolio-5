
import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Hero/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            }
        ]
    },

])