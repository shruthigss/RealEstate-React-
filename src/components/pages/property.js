import React from "react";
import Header from "./header";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import "./property.css"

const Property = () => {
    return (
        <div>
            <Header />
            <div className="search">
                <div className="search_conatiner">
                    <form className="form_search">
                        <input type="text" placeholder="Search PPD ID" className="input"/>
                        <button type="submit" className="searchIcon"><SearchSharpIcon/></button>
                    </form>
                </div>
               <button className="addProperty">+ Add Property</button>
            </div>
        </div>
    )
}

export default Property;