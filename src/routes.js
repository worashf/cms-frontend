import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import EmployeeCompliantRequest from "views/compliant/CompliantRequest";

// Auth Imports
import SignIn from "views/auth/SignIn";
import Signup from "views/auth/SignUp";

//Landing Page Imports
import LandingPage from "views/landing/LandingPage";

// New complian 
import ComplianceForm from "views/compliant/ComplianceForm";
import CompliantDetail from "views/compliant/CompliantDetail";
// user page
import UserPage  from "views/admin/users/UserPage";
import EmployeePage  from "views/admin/employees/EmployeePage"

// institution page
import InstitutionPage  from "views/admin/institutions/InstitutionPage"
// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdPerson,
  MdLock,
  MdSupervisorAccount,
  MdOutlineMapsHomeWork,
  MdSupervisedUserCircle,
  MdBook,
  MdBookmark,
} from "react-icons/md";

const routes = [
  {
    name: " ዳሽ ቦርድ",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
    role : ['COMPLIANCE_TEAM_LEADER', 'HEAD_OF_OFFICE', "ADMIN"]
  },

  {
    name: "ተቋማት",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "insitutions",
    component: <InstitutionPage />,
    role : ['COMPLIANCE_TEAM_LEADER', 'HEAD_OF_OFFICE', "ADMIN"]
  },
  {
    name: "ሠራተኞች",
    layout: "/admin",
    icon: <MdSupervisedUserCircle className="h-6 w-6" />,
    path: "employees",
    component: <EmployeePage />,
    role: ['COMPLIANCE_TEAM_LEADER', 'HEAD_OF_OFFICE', "ADMIN"]
  },

  {
    name: "ቅሬታ",
    layout: "/admin",
    icon: <MdBookmark className="h-6 w-6" />,
    path: "data-tables",
    component: <EmployeeCompliantRequest />,
    role: ['COMPLIANT', 'COMPLIANCE_TEAM_LEADER', 'HEAD_OF_OFFICE', "ADMIN"]
  },
  // {
  //   name: "የቅሬታ መልስ",
  //   layout: "/compliant-response",
  //   icon: <MdBook className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <EmployeeCompliantRequest />,
  // },
  // {
  //   name: "ተጠቃሚዎች",
  //   layout: "/admin",
  //   icon: <MdSupervisorAccount className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <EmployeeCompliantRequest />,
  // },
  {
    name: "ተጠቃሚዎች",
    layout: "/admin",
    icon: <MdSupervisorAccount className="h-6 w-6" />,
    path: "users",
    component: <UserPage/>,
    role : ['COMPLIANCE_TEAM_LEADER', 'HEAD_OF_OFFICE', "ADMIN"]
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
    // role: ['COMPLIANT', 'COMPLIANCE_TEAM_LEADER', 'HEAD_OF_OFFICE', "ADMIN"]
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <Signup />,
  },
  {
    name: "Landing Page",
    layout: "/auth",
    path: "/",
    icon: <MdLock className="h-6 w-6" />,
    component: <LandingPage />,
  },

  {
    name: "New Compliant",
    layout: "/admin",
    path: "/new-complian",
    icon: <MdLock className="h-6 w-6" />,
    component: <ComplianceForm />,
  },
  {
    name: "Compliant Details",
    layout: "/admin",
    path: "/compliant-detail/:compliantId",
    icon: <MdLock className="h-6 w-6" />,
    component: <CompliantDetail />,
  },

];
export default routes;
