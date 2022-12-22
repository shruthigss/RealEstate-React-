import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import "./table.css"

const Table = ({data})=> {
    console.log(data);
    return (
        <table className="table">
            <tbody>
                <tr>
                    <th>PPD ID</th>
                    <th>Image</th>
                    <th>Property</th>
                    <th>Contact</th>
                    <th>Area</th>
                    <th>Views</th>
                    <th>Status</th>
                    <th>Days Left</th>
                    <th>Action</th>
                </tr>
                {data.map((item)=>(
                    // console.log(item);
                    <tr>
                        <td>{item._id}</td>
                        <td><img src = {item.cloudinary_id} alt="img"/></td>
                        <td>{item.Property_type}</td>
                        <td>{item.Mobile}</td>
                        <td>{item.Total_area}</td>
                        <td>01</td>
                        <td>{item.Property_Description}</td>
                        <td>15</td>
                        <td><RemoveRedEyeIcon /><EditIcon/></td>
                    </tr>
                ))}               
            </tbody>
        </table>
    )
}

export default Table;