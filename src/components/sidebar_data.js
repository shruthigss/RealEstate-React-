import React from "react";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PlayForWorkIcon from '@mui/icons-material/PlayForWork';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SellSharpIcon from '@mui/icons-material/SellSharp';

export const Sidebar_data = [
    {
        title : "Property",
        Icon : <OtherHousesIcon />,
        link : "/property"
    },
    {
        title : "Assistance",
        Icon : <NotificationsIcon />,
        link : "/Property"
    },
    {
        title : "Received Interest",
        Icon : <PlayForWorkIcon />,
        link : "/Property"
    },
    {
        title : "Sent Interest",
        Icon : <PlayForWorkIcon />,
        link : "/Property"
    },
    {
        title : "Property Views",
        Icon : <VisibilityIcon />,
        link : "/Property"
    },
    {
        title : "Tariff Plan",
        Icon : <SellSharpIcon />,
        link : "/Property"
    }
]