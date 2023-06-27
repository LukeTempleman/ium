import React from "react";
import "../css/navbar.css"
import { Speed } from "@mui/icons-material";
import BarChartIcon from '@mui/icons-material/BarChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navPages">

        <div className="dashboard-route">
            <Speed color="primary" sx={{ fontSize: 50 }}></Speed>
            <div className="nav-button-title">Dashboard</div>
            </div>

        <div className="analytics-route">
            <BarChartIcon sx={{ fontSize: 50 }}/>
            <div className="nav-button-title">Analytics</div>
        </div>

        <div className="trading-route">
        <CurrencyExchangeIcon sx={{ fontSize: 50 }}/>
            <div className="nav-button-title">Trading</div>
        </div>

        <div className="notifications-route">
        <ShowChartIcon sx={{ fontSize: 50 }}/>
            <div className="nav-button-title">Notifications</div>
        </div>

        <div className="navbar-space">
        </div>

        <div className="logout">
        <LogoutIcon sx={{ fontSize: 50 }}/>
            <div className="nav-button-title">LogOut</div>
        </div>
      </div>

      
    </div>
  );
}

export default Navbar;
