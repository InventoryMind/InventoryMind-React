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
import TransferItems from "views/TechnicalOfficer/TransferItems";
import InventoryItems from "views/TechnicalOfficer/InventoryItems";
import GeneratedReports from "views/TechnicalOfficer/GeneratedReports";
import NotificationsPage from "views/TechnicalOfficer/Notifications";
import AddEquipment from "views/TechnicalOfficer/AddEquipment";
import {DriveFileMove, Inventory,Report,Add} from '@mui/icons-material';
import { KeyboardReturn, ShopTwo,ReportProblem,CropFree} from "@material-ui/icons";
import BarcodeGenerate from "views/TechnicalOfficer/GenerateBarcode"
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
    layout: "/tech",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/tech",
  },
  {
    path: "/generateBarcode",
    name: "Generate Barcode",
    // rtlName: "قائمة الجدول",
    icon: CropFree,
    component: BarcodeGenerate,
    layout: "/tech",
  },
  {
    path: "/addEquipment",
    name: "Add Equipment",
    // rtlName: "قائمة الجدول",
    icon: Add,
    component: AddEquipment,
    layout: "/tech",
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/tech",
  // },
  {
    path: "/inventoryItems",
    name: "InventoryItems",
    rtlName: "قائمة الجدول",
    icon: Inventory,
    component: InventoryItems,
    layout: "/tech",
  },
  {
    path: "/addReport",
    name: "Add Report",
    rtlName: "طباعة",
    icon: Report,
    component: AddReport,
    layout: "/tech",
  },
  {
    path: "/transferItems",
    name: "TransferItems",
    rtlName: "الرموز",
    icon: DriveFileMove,
    component: TransferItems,
    layout: "/tech",
  },
  {
    path: "/borrowItems",
    name: "Borrowed Items",
    rtlName: "خرائط",
    icon: ShopTwo,
    component: BorrowedItems,
    layout: "/tech",
  },
  {
    path: "/generatedReports",
    name: "Generated Reports",
    rtlName: "خرائط",
    icon: ReportProblem,
    component: GeneratedReports,
    layout: "/tech",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "خرائط",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/tech",
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
