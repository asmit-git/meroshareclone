import React, { useState } from "react";
import Logo from "../assets/merosharelogo.png";
import {
  BuildingStorefrontIcon,
  ChevronDownIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const Login = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dp, setDp] = useState("");
  const [userName, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const handleLogin = () => {
    console.log("loggedin successfully");
  };
  return (
    <div className="app bg-primary">
      <div className="max-w-full mx-auto min-h-screen flex flex-col justify-center">
        <div className="w-[500px] mx-auto my-4">
          <div className="bg-primary shadow-2xl rounded-lg w-full p-4 sm:p-6 lg:p-8 space-y-4">
            <img
              src={Logo}
              alt="logo"
              className="mx-auto w-[400px] h-[100px]"
            />
            <form className="flex flex-col items-start gap-4 px-6" action="#">
              <div className="flex items-center justify-between">
                <BuildingStorefrontIcon className="h-5 w-5 text-white mr-1" />
                <p className="text-white felx-1 text-sm font-[350]">
                  Depository Participants
                </p>
              </div>
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="relative w-full"
              >
                <ChevronDownIcon className="w-4 h-4 absolute right-2 top-2 bottom-2" />
                <input
                  className="rounded h-9 text-sm font-normal w-full bg-white border-transparent focus:outline-none p-2"
                  placeholder="select your dp"
                  defaultValue={dp}
                />
              </div>
              {showDropdown && (
                <div className="w-full bg-white -mt-[14px] z-10">
                  <input className="border-2 border-gray-500 h-8 m-2 w-[95%] focus:outline-none p-2" />
                  <div className="rounded shadow-md my-2 relative">
                    <ul className="list-reset text-sm font-normal h-[100px] overflow-y-scroll scroll-smooth uppercase">
                      <li
                        onClick={() => {
                          setDp("Akash Capital Limited (19000)");
                          setShowDropdown(!showDropdown);
                        }}
                      >
                        <p className="p-2 block text-black hover:bg-blue-400 cursor-pointer">
                          Akash Capital Limited (19000)
                        </p>
                      </li>
                      <li
                        onClick={() => {
                          setDp("Abc Securities Private limited (13200)");
                          setShowDropdown(!showDropdown);
                        }}
                      >
                        <p className="p-2 block text-black hover:bg-blue-400 cursor-pointer">
                          Abc Securities Private limited (13200)
                        </p>
                      </li>
                      <li
                        onClick={() => {
                          setDp("Agarwal Securities private limited (12300)");
                          setShowDropdown(!showDropdown);
                        }}
                      >
                        <p className="p-2 block text-black hover:bg-blue-400 cursor-pointer">
                          Agarwal Securities private limited (12300)
                        </p>
                      </li>
                      <li
                        onClick={() => {
                          setDp(
                            "Agricultural development bank limited (17200)"
                          );
                          setShowDropdown(!showDropdown);
                        }}
                      >
                        <p className="p-2 block text-black hover:bg-blue-400 cursor-pointer">
                          Agricultural development bank limited (17200)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between">
                <UserIcon className="h-5 w-5 text-white mr-1" />
                <p className="text-white felx-1 text-sm font-[350]">Username</p>
              </div>
              <input
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded h-9 w-full bg-white focus:outline-none p-2 text-sm font-normal"
              />
              <div className="flex items-center justify-between">
                <LockClosedIcon className="h-5 w-5 text-white mr-1" />
                <p className="text-white felx-1 text-sm font-[350]">Password</p>
              </div>
              <input
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                type="password"
                className="rounded h-9 w-full bg-white focus:outline-none p-2 text-sm font-normal"
              />
              <button
                onClick={handleLogin}
                className="rounded cursor-pointer h-12 w-full bg-btnclr text-btntextclr"
              >
                Login
              </button>
              <p className="text-center w-full mx-auto text-white text-sm font-normal cursor-pointer hover:underline">
                Forgot your password?
              </p>
            </form>
          </div>
          <p className="text-white text-center tex-sm mt-8 font-normal">
            © 2023 CDS and Clearing Limited. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
