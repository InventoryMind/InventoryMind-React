
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
import {RequestPage} from '@mui/icons-material';


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
    path: "/lecturerProfile",
    name: "Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: AccountCircle,
    component: UserProfile,
    layout: "/lecturer",
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/lecturer",
  // },
  {
    path: "/pendingRequests",
    name: "PendingRequests",
    rtlName: "قائمة الجدول",
    icon: RequestPage,
    component: PendingRequests,
    layout: "/lecturer", 
  },
  {
    path: "/approvedRequests",
    name: "ApprovedRequests",
    rtlName: "طباعة",
    icon: RequestPage,
    component: ApprovedRequests,
    layout: "/lecturer",
  },
  {
    path: "/rejectedRequests",
    name: "RejectedRequests",
    rtlName: "طباعة",
    icon: RequestPage,
    component: RejectedRequests,
    layout: "/lecturer",
  },
  {
    path: "/notifications",
    name: "Notifications",  
    rtlName: "الرموز",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/lecturer",
  },
  // {
  //   path: "/student",
  //   name: "Student",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Student,
  //   layout: "/lecturer",
  // },
 
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
