
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.js";
import DashboardPage from "views/Admin/Dashboard";
import UserProfile from "views/Admin/UserProfile";
// import UserProfile from "views/UserProfile/UserProfile.js";
// import AssignTechOfficers from "views/AssignTechOfficers/AssignTechOfficers";
import AssignTechOfficers from "views/Admin/AssignTechOfficers";
import Laboratory from "views/Admin/Laboratory";
// import Laboratory from "views/Laboratory/Laboratory.js";
//import Typography from "views/Typography/Typography.js";
import Lecturer from "views/Admin/Lecturer";
// import Lecturer from "views/Lecturer/Lecturer.js";
//import Icons from "views/Icons/Icons.js";
//import Maps from "views/Maps/Maps.js";
import Student from "views/Admin/Student";
import TechnicalOfficer from "views/Admin/TechnicalOfficer";
import NotificationsPage from "views/Admin/Notifications";
import AddType from "views/Admin/AddEquipmentType";
import Barcode from "views/Admin/BarcodeDownload";
// import Student from "views/Student/Student.js";
// import TechnicalOfficer from "views/TechnicalOfficer/TechnicalOfficer.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
import {Lock,Domain,GroupAdd,AccountCircle} from '@material-ui/icons';
import {CropFree,Add} from '@mui/icons-material';
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
//import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: AccountCircle,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/lecturer",
    name: "Lecturer",
    rtlName: "طباعة",
    icon: Person,
    component: Lecturer,
    layout: "/admin",
  },
  {
    path: "/technicalofficer",
    name: "TechnicalOfficer",
    rtlName: "الرموز",
    icon: Person,
    component: TechnicalOfficer,
    layout: "/admin",
  },
  {
    path: "/student",
    name: "Student",
    rtlName: "خرائط",
    icon: Person,
    component: Student,
    layout: "/admin",
  },
  {
    path: "/aasignTechOfficers",
    name: "AssignTechOfficers",
    rtlName: "قائمة الجدول",
    icon:GroupAdd,
    component: AssignTechOfficers,
    layout: "/admin",
  },
  {
    path: "/laboratories",
    name: "Laboratories",
    rtlName: "قائمة الجدول",
    icon: Domain,
    component: Laboratory,
    layout: "/admin",
  },
  {
    path: "/addEquipmentType",
    name: "Add EquipmentType",
    // rtlName: "قائمة الجدول",
    icon: Add,
    component: AddType,
    layout: "/admin",
  },
  {
    path: "/barcodeDownload",
    name: "Barcode Download",
    // rtlName: "قائمة الجدول",
    icon: CropFree,
    component: Barcode,
    layout: "/admin",
  },
  // {
  //   path: "/passwordReset",
  //   name: "Password Reset",
  //   rtlName: "قائمة الجدول",
  //   icon: Lock,
  //   component: AssignTechOfficers,
  //   layout: "/admin",
  // },
  {
    path: "/notifications",
    name: "Notifications",
    // rtlName: "قائمة الجدول",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  
 
  
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
