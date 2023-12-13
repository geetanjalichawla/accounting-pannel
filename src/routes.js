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
import OrderList from 'views/main/ecommerce/orderList/index';
import Week from 'views/week/index.jsx';

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SalesReport from "views/weeklycompaion";
import FlashReport from "views/flashreport";
import uberEats from "views/uberEats";
import doordash from "views/weekly-doordash";
import weeklygrubhub from "views/weeklygrubhub";
import LabourHours from "views/labour-hours";
import weeklyMclane from "views/weekly-mclanepurchase";
import averageTicketSizePY from "views/weekly-averageTicketSizePY";
import CustomerCount from "views/weekly-customercount";
import mclanePercent from "views/mclanePercent";
import employeeProductivity from "views/weekly-employeeProductivity";
import { GoReport } from "react-icons/go";
import Dashboard from "views/dashboard";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Dashboard,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "/nft-marketplace",
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width='20px'
  //       height='20px'
  //       color='inherit'
  //     />
  //   ),
  //   component: NFTMarketplace,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  //   path: "/data-tables",
  //   component: DataTables,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  //   component: SignInCentered,
  // },
  {
    name: 'TaccoBells',
    layout: '/admin',
    collapse: true,
    path: '/messages',
    icon: <Icon as={MdMessage} width='20px' height='20px' color='inherit' />,
    items:[
      {
        name: 'Weekly Report',
        layout: '/admin',
        path: '/week-report',
        icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
        component: Week,
      },
      {
        name: 'weekly comparaition',
        layout: '/admin',
       
        icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
        collapse: true,
        component: <></>,
        path: "/jlj",
    
        items: [ {
          name: 'Weekly uberEats',
          layout: '/admin',
          path: '/uber-eats',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
          component: uberEats,
        },
        {
          name: 'Weekly grubhub',
          layout: '/admin',
          path: '/grubhub',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
          component: weeklygrubhub,
        },
        {
          name: 'Weekly doordash',
          layout: '/admin',
          path: '/doordash',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
          component: doordash,
        },
        {
          name: 'Weekly Companion',
          layout: '/admin',
          path: '/sales',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: SalesReport,
        },
        {
          name: 'Mclane Purchase',
          layout: '/admin',
          path: '/weekly-mclane-purchase',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: weeklyMclane,
        },
        {
          name: 'Customer Count',
          layout: '/admin',
          path: '/weekly-customer-count',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: CustomerCount,
        },
        {
          name: 'Average Ticket Size',
          layout: '/admin',
          path: '/average-ticket-size',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: averageTicketSizePY,
        },
      
        {
          name: 'weekly employee Productivity',
          layout: '/admin',
          path: '/employee-productivity',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: employeeProductivity,
        },
      
        {
          name: 'weekly mclanePercent',
          layout: '/admin',
          path: '/mclane-percent',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
          component: mclanePercent,
        },
      
        {
          name: 'Labour Hours',
          layout: '/admin',
          path: '/labour-hours',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
      
          component: LabourHours,
        },
        
      ],
      },
    
      {
        name: 'Daily Flash Report',
        layout: '/admin',
        path: '/flash-report',
        icon: <Icon as={MdWeekend} width='20px' height='20px' color='inherit' />,
        component: FlashReport,
      },
    ],
    component: Messages,
  },


  {
    name: 'Wendies',
    layout: '/admin',
    collapse: true,
    path: '/messages',
    icon: <Icon as={MdMessage} width='20px' height='20px' color='inherit' />,
    items:[
      {
        name: 'Weekly Report',
        layout: '/admin',
        path: '/week-report',
        icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
        component: Week,
      },
      {
        name: 'weekly comparaition',
        layout: '/admin',
       
        icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
        collapse: true,
        component: <></>,
        path: "/jlj",
    
        items: [ {
          name: 'Weekly uberEats',
          layout: '/admin',
          path: '/uberEats',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
      
          component: uberEats,
        },
        {
          name: 'Weekly grubhub',
          layout: '/admin',
          path: '/grubhub',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
      
          component: weeklygrubhub,
        },
        {
          name: 'Weekly doordash',
          layout: '/admin',
          path: '/doordash',
          icon: <Icon as={GoReport} width='20px' height='20px' color='inherit' />,
      
          component: doordash,
        },
        {
          name: 'Weekly Compaion',
          layout: '/admin',
          path: '/sales',
          icon: <Icon as={MdCompare} width='20px' height='20px' color='inherit' />,
      
          component: SalesReport,
        },],
      },
    
      {
        name: 'Daily Flash Report',
        layout: '/admin',
        path: '/flash-report',
        icon: <Icon as={MdWeekend} width='20px' height='20px' color='inherit' />,
    
        component: FlashReport,
      },
    ],
    component: Messages,
  },

 
 
];

export default routes;

