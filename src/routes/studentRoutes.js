
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
import {RequestPage,Password} from '@mui/icons-material';
import changePass from "views/Student/ChangePass";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/student",
  },
  {
    path: "/Profile",
    name: "Profile",
    icon: AccountCircle,
    component: UserProfile,
    layout: "/student",
  },
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
  {
    path: "/changePass",
    name: "Change Password",
    icon: Password,
    component: changePass,
    layout: "/student",
  },
];

export default dashboardRoutes;
