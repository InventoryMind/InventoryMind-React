import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/TechnicalOfficer/Dashboard";
import UserProfile from "views/TechnicalOfficer/UserProfile";
import AddReport from "views/TechnicalOfficer/AddReport";
import BorrowedItems from "views/TechnicalOfficer/BorrowedItems";
//import TransferItems from "views/TechnicalOfficer/TransferItems";
import InventoryItems from "views/TechnicalOfficer/InventoryItems";
import GeneratedReports from "views/TechnicalOfficer/GeneratedReports";
import NotificationsPage from "views/TechnicalOfficer/Notifications";
import AddEquipment from "views/TechnicalOfficer/AddEquipment";
import {DriveFileMove, Inventory,Report,Add} from '@mui/icons-material';
import { KeyboardReturn, ShopTwo,ReportProblem,CropFree} from "@material-ui/icons";
import GenerateBarcode from "views/TechnicalOfficer/GenerateBarcode"

const dashboardRoutes = [
 
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/tech",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/tech",
  },
  {
    path: "/generateBarcode",
    name: "Generate Barcode",
    icon: CropFree,
    component: GenerateBarcode,
    layout: "/tech",
  },
  {
    path: "/addEquipment",
    name: "Add Equipment",
    icon: Add,
    component: AddEquipment,
    layout: "/tech",
  },

  {
    path: "/inventoryItems",
    name: "InventoryItems",
    icon: Inventory,
    component: InventoryItems,
    layout: "/tech",
  },
  {
    path: "/addReport",
    name: "Add Report",
    icon: Report,
    component: AddReport,
    layout: "/tech",
  },
  {
    path: "/borrowItems",
    name: "Borrowed Items",
    icon: ShopTwo,
    component: BorrowedItems,
    layout: "/tech",
  },
  {
    path: "/generatedReports",
    name: "Generated Reports",
    icon: ReportProblem,
    component: GeneratedReports,
    layout: "/tech",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/tech",
  },
  
  
 
];

export default dashboardRoutes;
