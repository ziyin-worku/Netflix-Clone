import React from "react";
import "./Header.css";
import NetflixLogo from '../../assets/images/NetflixLogo.jpg'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            {/* <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li> */}
            <li className="Netflix_name">Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by Languages </li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><SearchIcon/></li>
            <li><NotificationsIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
