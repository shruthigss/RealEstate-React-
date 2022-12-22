import React, { useState, useEffect } from "react";
import Header from "./header";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import "./property.css"
import Table from "./table";
import axios from "axios";

const Property = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect (()=>{
        const fetchData = async()=> {
            const res = await axios.get(`http://localhost:5100/${query}`);
            setData(res.data);
            console.log(res);
        };
        fetchData();
    }, [query]);
    
    return (
        <div>
            <Header />
            <div className="search">
                <div className="search_conatiner">
                    <form className="form_search">
                        <input type="text" placeholder="Search PPD ID" className="input" 
                        onChange={(event)=>setQuery(event.target.value)}/>
                        <SearchSharpIcon className="searchIcon"/>
                    </form>
                </div>
               <button className="addProperty">+ Add Property</button>
            </div>
           { <Table data={data}/>}
        </div>
    )
}

export default Property;