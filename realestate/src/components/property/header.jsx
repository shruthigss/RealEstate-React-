import React from "react";
import "./header.css";
import Person2Icon from '@mui/icons-material/Person2';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = ()=> {
    return (
        <div className="header">
            <div className="user_id">USER ID : 06PPD125</div>
            <div className="userName">
                <span><Person2Icon/></span>
                {/* <input type="text" placeholder="User Name"/> */}
                <span><KeyboardArrowDownIcon/></span>
            </div>
        </div>
    )
}

export default Header;;