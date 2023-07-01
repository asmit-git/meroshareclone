import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/merosharelogo.png";
import MobileLogo from "../assets/mobilelogomeroshare.png";
import {
  HomeIcon,
  IdentificationIcon,
  ChartBarIcon,
  ArrowPathRoundedSquareIcon,
  ClipboardDocumentCheckIcon,
  DocumentChartBarIcon,
  ChatBubbleLeftIcon,
  GlobeAltIcon,
  RectangleStackIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

const SidebarMenu = ({ iconNav }) => {
  const location = useLocation();
  return (
    <div className="w-full mx-auto flex flex-col items-start gap-y-[450px]">
      <div>
        {iconNav ? (
          <img
            src={MobileLogo}
            alt="merosharelogo"
            className="w-12 h-10 mx-6 mb-2"
          />
        ) : (
          <img
            src={Logo}
            alt="merosharelogo"
            className={` "w-full h-[75px]"}`}
          />
        )}

        <div className="flex flex-col items-start">
          <Link
            to="/dashboard"
            className={`flex items-center space-x-2 text-xs font-medium text-white px-8 py-2 w-full ${
              location.pathname === "/dashboard" && `bg-activelink relative`
            }`}
          >
            <div
              className={`${
                location.pathname === "/dashboard" &&
                `before:absolute before:bg-red-700 before:w-1 before:h-full before:top-0 before:left-0`
              }`}
            ></div>
            <HomeIcon className="h-5 w-5" />
            <p className={`${iconNav ? "hidden" : ""}`}>Dashboard</p>
          </Link>
          <Link
            to="/details"
            className={`flex items-center space-x-2 text-xs font-medium text-white px-8 py-2 w-full ${
              location.pathname === "/details" && `bg-activelink relative`
            }`}
          >
            <div
              className={`${
                location.pathname === "/details" &&
                `before:absolute before:bg-red-700 before:w-1 before:h-full before:top-0 before:left-0`
              }`}
            ></div>
            <IdentificationIcon className="h-5 w-5" />
            <p className={`${iconNav ? "hidden" : ""}`}>My Details</p>
          </Link>
          <Link
            to="/shares"
            className={`flex items-center space-x-2 text-xs font-medium text-white px-8 py-2 w-full ${
              location.pathname === "/shares" && `bg-activelink relative`
            }`}
          >
            <div
              className={`${
                location.pathname === "/shares" &&
                `before:absolute before:bg-red-700 before:w-1 before:h-full before:top-0 before:left-0`
              }`}
            ></div>
            <ChartBarIcon className="h-5 w-5" />
            <p className={`${iconNav ? "hidden" : ""}`}>My Shares</p>
          </Link>
          <div
            className={`flex items-center space-x-2 text-xs font-medium text-white px-8 py-2 w-full ${
              location.pathname === "/transactions" && `bg-activelink relative`
            }`}
          >
            <div
              className={`${
                location.pathname === "/transactions" &&
                `before:absolute before:bg-red-700 before:w-1 before:h-full before:top-0 before:left-0`
              }`}
            ></div>
            <ArrowPathRoundedSquareIcon className="h-5 w-5" />
            <Link to="/transactions" className={`${iconNav ? "hidden" : ""}`}>
              My Transaction History
            </Link>
          </div>
          <div
            className={`flex items-center space-x-2 text-xs font-medium text-white px-8 py-2 w-full ${
              location.pathname === "/portfolio" && `bg-activelink relative`
            }`}
          >
            <div
              className={`${
                location.pathname === "/portfolio" &&
                `before:absolute before:bg-red-700 before:w-1 before:h-full before:top-0 before:left-0`
              }`}
            ></div>
            <ClipboardDocumentCheckIcon className="h-5 w-5" />
            <Link to="/portfolio" className={`${iconNav ? "hidden" : ""}`}>
              My Portfolio
            </Link>
          </div>
          <div
            className={`flex items-center space-x-2 text-xs font-medium text-white px-8 py-2 w-full ${
              location.pathname === "/pledgeshare" && `bg-activelink relative`
            }`}
          >
            <div
              className={`${
                location.pathname === "/pledgeshare" &&
                `before:absolute before:bg-red-700 before:w-1 before:h-full before:top-0 before:left-0`
              }`}
            ></div>
            <DocumentChartBarIcon className="h-5 w-5" />
            <Link to="/pledgeshare" className={`${iconNav ? "hidden" : ""}`}>
              My Pledge Share Detail
            </Link>
          </div>
          <div
            className={`flex items-center space-x-2 text-xs font-medium text-white px-8 py-2 w-full ${
              location.pathname === "/bankrequest" && `bg-activelink relative`
            }`}
          >
            <div
              className={`${
                location.pathname === "/bankrequest" &&
                `before:absolute before:bg-red-700 before:w-1 before:h-full before:top-0 before:left-0`
              }`}
            ></div>
            <ChatBubbleLeftIcon className="h-5 w-5" />
            <Link to="/bankrequest" className={`${iconNav ? "hidden" : ""}`}>
              My Bank Request
            </Link>
          </div>
          <div
            className={`flex items-center space-x-2 text-xs font-medium text-white px-8 py-2 w-full ${
              location.pathname === "/asba" && `bg-activelink relative`
            }`}
          >
            <div
              className={`${
                location.pathname === "/asba" &&
                `before:absolute before:bg-red-700 before:w-1 before:h-full before:top-0 before:left-0`
              }`}
            ></div>
            <GlobeAltIcon className="h-5 w-5" />
            <Link to="/asba" className={`${iconNav ? "hidden" : ""}`}>
              My ASBA
            </Link>
          </div>
          <div
            className={`flex items-center space-x-2 text-xs font-medium text-white px-8 py-2 w-full ${
              location.pathname === "/source" && `bg-activelink relative`
            }`}
          >
            <div
              className={`${
                location.pathname === "/source" &&
                `before:absolute before:bg-red-700 before:w-1 before:h-full before:top-0 before:left-0`
              }`}
            ></div>
            <RectangleStackIcon className="h-5 w-5" />
            <Link to="/source" className={`${iconNav ? "hidden" : ""}`}>
              My Purchase Source
            </Link>
          </div>
          <div
            className={`flex items-center space-x-2 text-xs font-medium text-white px-8 py-2 w-full ${
              location.pathname === "/edis" && `bg-activelink relative`
            }`}
          >
            <div
              className={`${
                location.pathname === "/edis" &&
                `before:absolute before:bg-red-700 before:w-1 before:h-full before:top-0 before:left-0`
              }`}
            ></div>
            <ArrowsRightLeftIcon className="h-5 w-5" />
            <Link to="edis" className={`${iconNav ? "hidden" : ""}`}>
              My EDIS
            </Link>
          </div>
        </div>
      </div>
      <p
        className={`${
          iconNav ? "hidden" : "text-white text-center text-xs font-normal"
        }`}
      >
        © 2023 CDS and Clearing Limited. All Rights Reserved
      </p>
    </div>
  );
};

export default SidebarMenu;
