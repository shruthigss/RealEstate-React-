import React from "react";

const BasicInfo = ()=> {
    return (
        <div>
            <h1>Basic Info</h1>
            <div className="row">
                <label for="Property Type"></label>
                <select placeholder="Select Property Type" id="PropertyType" name="Property Type">
                    <option value="Plot">Plot</option>
                    <option value="House">House</option>
                    <option value="Flat">Flat</option>
                </select>
                <label></label>
                <input/>
            </div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
        </div>
    )
}
export default BasicInfo;