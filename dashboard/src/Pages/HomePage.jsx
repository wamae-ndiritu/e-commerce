import React from "react";
import TopHeader from "../Components/TopHeader";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main"


const HomePage = () => {
    return(
         <>
      <TopHeader />
      <div className="main-flex">
        <div className="flex-sidebar mt-3">
          <Sidebar />
        </div>
        <div className="flex-main">
          <Main />
        </div>
      </div>
        
    </>
    )
}


export default HomePage;