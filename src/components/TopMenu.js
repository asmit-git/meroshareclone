import React from "react";
import {
  Bars3Icon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";

const TopMenu = ({ iconNav, setIconNav }) => {
  return (
    <div
      className={`${
        iconNav
          ? "fixed top-0 left-[92px] h-[65px] flex justify-between bg-gray-50 shadow-lg w-full"
          : "fixed top-0 left-[250px] h-[65px] flex justify-between bg-gray-50 shadow-lg w-full"
      }`}
    >
      <div
        className={`${
          iconNav
            ? "flex items-center mx-4 gap-x-[1500px]"
            : "flex items-center mx-4 gap-x-[1300px]"
        }`}
      >
        <div>
          <Bars3Icon onClick={() => setIconNav(!iconNav)} className="h-6 w-6" />
        </div>
        <div className="flex items-center gap-x-4">
          <ArrowRightOnRectangleIcon className="h-6 w-6 text-gray-400" />
          <div className="flex items-center gap-x-2">
            <UserIcon className="h-6 w-6 text-gray-400" />
            <div className="flex flex-col items-start justify-start">
              <p className="uppercase text-sm font-semibold text-gray-700">
                John Doe
              </p>
              <p className="text-xs font-normal text-gray-700">
                Mero Share Profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
