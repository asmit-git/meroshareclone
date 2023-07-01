import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import TopMenu from "./TopMenu";

const Layout = ({ children }) => {
  const [iconNav, setIconNav] = useState(false);
  return (
    <div className="min-h-screen w-full mx-auto">
      <div
        className={`${
          iconNav
            ? "fixed left-0 top-0 h-screen bg-primary max-w-[92px]"
            : "fixed left-0 top-0 h-screen bg-primary max-w-[250px]"
        }`}
      >
        {/* menu goes here  */}
        <SidebarMenu iconNav={iconNav} />
      </div>
      <div className="fixed left-[250px] w-full">
        <TopMenu iconNav={iconNav} setIconNav={setIconNav} />
        <div
          className={`${
            iconNav
              ? "fixed top-[65px] left-[92px] bg-gray-200 w-full h-screen"
              : "fixed top-[65px] left-[250px] bg-gray-200 w-full h-screen"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
