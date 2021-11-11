
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Lecturer/Dashboard";
import UserProfile from "views/Lecturer/userProfile";
import PendingRequests from "views/Lecturer/PendingRequests";
import NotificationsPage from "views/Lecturer/Notifications";
import ApprovedRequests from "views/Lecturer/ApprovedRequests";
import RejectedRequests from "views/Lecturer/RejectedRequests"
import { AccountCircle} from "@material-ui/icons";
import {RequestPage,Password} from '@mui/icons-material';
import changePass from "views/Lecturer/ChangePass";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/lecturer",
  },
  {
    path: "/Profile",
    name: "Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: AccountCircle,
    component: UserProfile,
    layout: "/lecturer",
  },
  {
    path: "/pendingRequests",
    name: "PendingRequests",
    rtlName: "قائمة الجدول",
    icon: RequestPage,
    component: PendingRequests,
    layout: "/lecturer", 
  },
  {
    path: "/requestHistory",
    name: "Request History",
    rtlName: "طباعة",
    icon: RequestPage,
    component: ApprovedRequests,
    layout: "/lecturer",
  },
  {
    path: "/changePass",
    name: "Change Password",
    icon: Password,
    component: changePass,
    layout: "/lecturer",
  }
];

export default dashboardRoutes;
