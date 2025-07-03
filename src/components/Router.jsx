
import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Hero/Home";
import Project from "../page/Project";
import Skill from "../page/Skill";
import Experience from "../page/Experience";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children:[
            {  
                index:true,
                path:"/",
                Component:Home
            },
            {
                path:"/project",
                Component:Project

            },{
                path:"/skill",
                Component:Skill
            },
            {
                path:"/experience",
                Component:Experience,
            }
        ]
    },
    
])