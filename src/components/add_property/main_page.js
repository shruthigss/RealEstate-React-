import React,{useState} from "react";

const AddProperty = ()=> {
    const [page, setPage] = useState(0);
    const title = ["Basic Info", "Property Detail", "General Info", "Location Info"]
    return (
        <div className="add_property">
            <div className="add_property_container">
                <div className="header">
                   {title[page]}
                </div>
                <div className="body">

                </div>
                <div className="footer">
                    <button
                    disabled={page === 0}
                    onClick={()=>{
                        setPage((curr)=>
                            curr-1
                        )
                    }}
                    >Cancel</button>
                    <button
                    disabled={page === title.length-1}
                    onClick={()=>{
                        setPage((curr)=>
                            curr+1
                        )
                    }}
                    >Save & Continue</button>
                </div>
            </div>
        </div>
    )
}
export default AddProperty;