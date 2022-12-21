import React from "react";
import "./asidebar.css";
import { Sidebar_data } from "./sidebar_data";

const Asidebar = () => {
    return (
        <div className="sidebar">
            <h1 className="logo">Logo</h1>
            <ul className="list">
                {Sidebar_data.map((ele, key) => {
                    return (
                        <li key={key} 
                            className="list_item"
                            onClick={() => {
                                window.location.pathname = ele.link;
                            }}>
                            <div className="icon">
                                {ele.Icon}
                            </div>
                            <div className="title">
                                {ele.title}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Asidebar;