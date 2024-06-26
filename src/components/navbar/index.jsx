import React from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import navbarimage from "assets/img/layout/Navbar.png";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "assets/img/avatars/user.jpeg";
import { logout } from "../../store/slices/user.slice"; 

const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);
  const dispatch = useDispatch();
 const navigate = useNavigate()



 const loginUser = localStorage.getItem('login-user');
 const loginUserObject = JSON.parse(loginUser);
   const loginUserName =  `${loginUserObject?.user?.employee?.firstName}`
  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/sign-in")
  };

  return (
    <nav className="sticky  z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/5 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <Link
            className="text-lg font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="/"
          >
            {brandText}
          </Link>
        </div>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[50px] items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[50px] md:flex-grow-0 md:gap-1 xl:w-[50px] xl:gap-2">
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full"
              src={avatar}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                   👋 Hey, {loginUserName}
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="flex flex-col p-4">
              
                <Link
                  to="/"
                  className="mt-3 text-sm font-medium text-red-500 transition duration-150 ease-out hover:text-red-500 hover:ease-in"
                  onClick={handleLogout}
                >
                  Log Out
                </Link>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
