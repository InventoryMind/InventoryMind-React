
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
import GeneratedReports from "views/Admin/GeneratedReports";
// import Lecturer from "views/Lecturer/Lecturer.js";
//import Icons from "views/Icons/Icons.js";
//import Maps from "views/Maps/Maps.js";
import Student from "views/Admin/Student";
import TechnicalOfficer from "views/Admin/TechnicalOfficer";
import NotificationsPage from "views/Admin/Notifications";
import AddType from "views/Admin/AddEquipmentType";
import changePass from "views/Admin/ChangePass";
// import Student from "views/Student/Student.js";
// import TechnicalOfficer from "views/TechnicalOfficer/TechnicalOfficer.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
import {Lock,Domain,GroupAdd,AccountCircle,ReportProblem} from '@material-ui/icons';
import {Add, Password} from '@mui/icons-material';
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
//import RTLPage from "views/RTLPage/RTLPage.js";
import AssessmentIcon from '@mui/icons-material/Assessment';

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
    icon: Add,
    component: AddType,
    layout: "/admin",
  },
 
  {
    path: "/generatedReport",
    name: "Report Summary",
    icon: AssessmentIcon,
    component: GeneratedReports,
    layout: "/admin",
  },

  {
    path: "/changePass",
    name: "Change Password",
    icon: Password,
    component: changePass,
    layout: "/admin",
  }
];

export default dashboardRoutes;

