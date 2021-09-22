
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import HistoryIcon from '@mui/icons-material/History';
import DashboardPage from "views/Student/Dashboard";
import UserProfile from "views/Student/userProfile";
import BorrowedHistory from "views/Student/BorrowedHistory";
import NotificationsPage from "views/Student/Notifications";
//import ApprovedRequests from "views/Lecturer/ApprovedRequests";
import CheckStatus from "views/Student/CheckStatus";
import { AccountCircle} from "@material-ui/icons";
import {RequestPage} from '@mui/icons-material';


const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/student",
  },
  {
    path: "/lecturerProfile",
    name: "Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: AccountCircle,
    component: UserProfile,
    layout: "/student",
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
    path: "/borrowedHistory",
    name: "Borrowed History",
    rtlName: "قائمة الجدول",
    icon: HistoryIcon,
    component: BorrowedHistory,
    layout: "/student",
  },
  {
    path: "/checkStatus",
    name: "Check Status",
    rtlName: "طباعة",
    icon: RequestPage,
    component: CheckStatus,
    layout: "/student",
  },
//   {
//     path: "/rejectedRequests",
//     name: "RejectedRequests",
//     rtlName: "طباعة",
//     icon: RequestPage,
//     component: RejectedRequests,
//     layout: "/lecturer",
//   },
  {
    path: "/notifications",
    name: "Notifications",  
    rtlName: "الرموز",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/student",
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
