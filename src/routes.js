import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdMessage,
  MdAddBox,
  MdWeekend,
  MdCompare,
} from "react-icons/md";

import Messages from 'views/main/messages/index';
// import OrderList from 'views/main/ecommerce/orderList/index';

// Admin Imports
import MainDashboard from "views/admin/default";
// import NFTMarketplace from "views/admin/marketplace";
// import Profile from "views/admin/profile";
// import DataTables from "views/admin/dataTables";

// Auth Imports
// import SignInCentered from "views/auth/signIn";
import SalesReport from "views/taco/weekly-compairation/weeklycompaion";
import FlashReport from "views/taco/flashreport";
import uberEats from "views/taco/weekly-compairation/uberEats";
import doordash from "views/taco/weekly-compairation/weekly-doordash";
import weeklygrubhub from "views/taco/weekly-compairation/weeklygrubhub";
import LabourHours from "views/taco/weekly-compairation/labour-hours";
import weeklyMclane from "views/taco/weekly-compairation/weekly-mclanepurchase";
import averageTicketSizePY from "views/taco/weekly-compairation/weekly-averageTicketSizePY";
import CustomerCount from "views/taco/weekly-compairation/weekly-customercount";
import mclanePercent from "views/taco/weekly-compairation/mclanePercent";
import employeeProductivity from "views/taco/weekly-compairation/weekly-employeeProductivity";
import Week from 'views/taco/week';

import SalesReport2 from "views/wendy/weekly-compairation/weeklycompaion";
import FlashReport2 from "views/wendy/flashreport";
import uberEats2 from "views/wendy/weekly-compairation/uberEats";
import doordash2 from "views/wendy/weekly-compairation/weekly-doordash";
import weeklygrubhub2 from "views/wendy/weekly-compairation/weeklygrubhub";
import LabourHours2 from "views/wendy/weekly-compairation/labour-hours";
import weeklyMclane2 from "views/wendy/weekly-compairation/weekly-mclanepurchase";
import averageTicketSizePY2 from "views/wendy/weekly-compairation/weekly-averageTicketSizePY";
import CustomerCount2 from "views/wendy/weekly-compairation/weekly-customercount";
import mclanePercent2 from "views/wendy/weekly-compairation/mclanePercent";
import employeeProductivity2 from "views/wendy/weekly-compairation/weekly-employeeProductivity";
import Week2 from 'views/wendy/week';

import { GoReport } from "react-icons/go";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: 'Taco Bell',
    layout: '/admin',
    collapse: true,
    path: '/messages',
    icon: <Icon as={MdMessage} width='20px' height='20px' color='inherit' />,
    items:[
      {
        name: 'TB Weekly Flash Report',
        layout: '/admin',
        path: '/week-report',
        icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
        component: Week,
      },
      {
        name: 'Weekly Comparison Reports',
        layout: '/admin',
       
        icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
        collapse: true,
        component: <></>,
        path: "/jlj",
    
        items: [ {
          name: 'TB Weekly UberEats Report',
          layout: '/admin',
          path: '/uber-eats',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
          component: uberEats,
        },
        {
          name: 'TB Weekly GrubHUb Report',
          layout: '/admin',
          path: '/grubhub',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
          component: weeklygrubhub,
        },
        {
          name: 'TB Weekly doordash Report',
          layout: '/admin',
          path: '/doordash',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
          component: doordash,
        },
        {
          name: 'TB Weekly Companion',
          layout: '/admin',
          path: '/sales',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: SalesReport,
        },
        {
          name: 'TB Weekly Mclane Purchase',
          layout: '/admin',
          path: '/weekly-mclane-purchase',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: weeklyMclane,
        },
        {
          name: 'TB Weekly Customer Count',
          layout: '/admin',
          path: '/weekly-customer-count',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: CustomerCount,
        },
        {
          name: 'TB Weekly Average Ticket Size',
          layout: '/admin',
          path: '/average-ticket-size',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: averageTicketSizePY,
        },
      
        {
          name: 'TB Weekly Employee Productivity',
          layout: '/admin',
          path: '/employee-productivity',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: employeeProductivity,
        },
      
        {
          name: 'TB Weekly Mclane Percent',
          layout: '/admin',
          path: '/mclane-percent',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: mclanePercent,
        },
      
        {
          name: 'TB Weekly Labour Hours',
          layout: '/admin',
          path: '/labour-hours',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
      
          component: LabourHours,
        },
        
      ],
      },
    
      {
        name: 'TB Daily Flash Report',
        layout: '/admin',
        path: '/flash-report',
        icon: <Icon as={MdWeekend} width='20px' height='20px' color='inherit' />,
        component: FlashReport,
      },
    ],
    component: Messages,
  },
  {
    name: "wendy's",
    layout: '/admin',
    collapse: true,
    path: '/wendy/messages',
    icon: <Icon as={MdMessage} width='20px' height='20px' color='inherit' />,
    items:[
      {
        name: 'TB Weekly Flash Report',
        layout: '/admin',
        path: '/wendy/week-report',
        icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
        component: Week2,
      },
      {
        name: 'TB Weekly comparation',
        layout: '/admin',
       
        icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
        collapse: true,
        component: <></>,
        path: "/wendy/jlj",
    
        items: [ {
          name: 'TB Weekly UberEats Report',
          layout: '/admin',
          path: '/wendy/uber-eats',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
          component: uberEats2,
        },
        {
          name: 'TB Weekly GrubHUb Report',
          layout: '/admin',
          path: '/wendy/grubhub',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
          component: weeklygrubhub2,
        },
        {
          name: 'TB Weekly doordash Report',
          layout: '/admin',
          path: '/wendy/doordash',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
          component: doordash2,
        },
        {
          name: 'TB Weekly Companion Report',
          layout: '/admin',
          path: '/wendy/sales',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: SalesReport2,
        },
        {
          name: 'TB Weekly Food Purchase Report',
          layout: '/admin',
          path: '/wendy/weekly-food-purchase',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: weeklyMclane2,
        },
        {
          name: 'TB Weekly Customer Count',
          layout: '/admin',
          path: '/wendy/weekly-customer-count',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: CustomerCount2,
        },
        {
          name: 'TB Weekly Average Ticket Size',
          layout: '/admin',
          path: '/wendy/average-ticket-size',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: averageTicketSizePY2,
        },
      
        {
          name: 'TB Weekly employee Productivity',
          layout: '/admin',
          path: '/wendy/employee-productivity',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: employeeProductivity2,
        },
      
        {
          name: 'TB weekly Food Percent',
          layout: '/admin',
          path: '/wendy/food-percent',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: mclanePercent2,
        },
      
        {
          name: 'TB Weekly Labour Hours',
          layout: '/admin',
          path: '/wendy/labour-hours',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
      
          component: LabourHours2,
        },
        
      ],
      },
    
      {
        name: 'TB Daily Flash Report',
        layout: '/admin',
        path: '/wendy/flash-report',
        icon: <Icon as={MdWeekend} width='20px' height='20px' color='inherit' />,
        component: FlashReport2,
      },
    ],
    component: Messages,
  },
];

export default routes;

