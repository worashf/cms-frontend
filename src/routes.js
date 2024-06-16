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
import ComplianceResponseForm from "views/compliance-response/ComplianceForm"
import CompliantDetail from "views/compliant/CompliantDetail";
// user page
import UserPage  from "views/admin/users/UserPage";
import EmployeePage  from "views/admin/employees/EmployeePage"

// institution page
import InstitutionPage  from "views/admin/institutions/InstitutionPage"

//  valid and invalid compliance lists
import ValidCompliance  from "views/compliant/ValidCompliance"

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
  MdQuestionAnswer
} from "react-icons/md";
import { CiSquareQuestion } from "react-icons/ci";
import { MdOutlineDoneAll } from "react-icons/md";
import { MdOutlineRemoveDone } from "react-icons/md";
import InvalidCompliance from "views/compliant/InvalidCompliance";
import EmployeeComplianceResponse from "views/compliant/EmployeeComplianceResponse";
import ComplianceResponseDetails from "views/compliant/ComplianceResponseDetail";

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
    name: "ተጠቃሚዎች",
    layout: "/admin",
    icon: <MdSupervisorAccount className="h-6 w-6" />,
    path: "users",
    component: <UserPage/>,
    role : ['COMPLIANCE_TEAM_LEADER', 'HEAD_OF_OFFICE', "ADMIN"]
  },
  {
    name: "ቅሬታ",
    layout: "/admin",
    icon: <MdBookmark className="h-6 w-6" />,
    path: "compliants",
    component: <EmployeeCompliantRequest />,
    role: ['COMPLIANT', 'COMPLIANCE_TEAM_LEADER', 'HEAD_OF_OFFICE', "ADMIN"]
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
  {
    name: "New Compliant Response",
    layout: "/admin",
    path: "/new-complian-response/:compliantId",
    icon: <MdLock className="h-6 w-6" />,
    component: <ComplianceResponseForm/>,
  },
  {
    name: "አግባብነት ያላቸው",
    layout: "/admin",
    path: "valid-compliants",
    icon: <MdOutlineDoneAll className="h-6 w-6" />,
    component: <ValidCompliance/>,
    role : ['COMPLIANCE_TEAM_LEADER', 'HEAD_OF_OFFICE', "ADMIN"]
  },
  {
    name: "አግባብነት የሌላቸው",
    layout: "/admin",
    path: "invalid-compliants",
    icon: <MdOutlineRemoveDone className="h-6 w-6" />,
    component: <InvalidCompliance/>,
    role : ['COMPLIANCE_TEAM_LEADER', 'HEAD_OF_OFFICE', "ADMIN"]
  },
  {
    name: "መልስ የተሰጣቸው",
    layout: "/admin",
    path: "employee-compliants-responses",
    icon: <MdQuestionAnswer className="h-6 w-6" />,
    component: <EmployeeComplianceResponse/>,
    role : ['COMPLIANCE_TEAM_LEADER', "COMPLIANT", 'HEAD_OF_OFFICE', "ADMIN"]
  },
  {
    name: "መልስ የተሰጣቸው",
    layout: "/admin",
    path: "/compliant-response-detail/:compliantId",
    component: <ComplianceResponseDetails/>,
   
  },

 
];
export default routes;
