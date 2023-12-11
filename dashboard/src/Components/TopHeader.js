import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TopHeader = () => {
  window.addEventListener("scroll", function () {
    // header should stick to the top
    const header = document.querySelector("#header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="container-fluid shadow-lg" id="header">
      <div className="header">
        <div className="header-left">
          <h1>Shangilia WholesaleRs Ltd</h1>
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder="Search here..." />
            <SearchIcon className="search-icon" />
          </div>
          <div className="notification">
            <NotificationsNoneIcon className="notif-icon" />
            <span className="badge">0</span>
          </div>
          <div className="profile-img">
            <img
              src="https://api.time.com/wp-content/uploads/2018/09/bill-gates-africa.jpg"
              alt="profile"
            />
          </div>
          <ArrowDropDownIcon className="profile-arrow" />
          <div className="dropdown-1">
            <ul className="header-dropdown">
              <li>My Profile</li>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
