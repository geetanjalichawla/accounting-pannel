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

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: 'Messages',
    layout: '/admin',
    path: '/messages',
    icon: <Icon as={MdMessage} width='20px' height='20px' color='inherit' />,

    component: Messages,
  },
  {
    name: 'Messages',
    layout: '/admin',
    path: '/week',
    icon: <Icon as={MdWeekend} width='20px' height='20px' color='inherit' />,

    component: Week,
  },
  {
    name: 'Messages',
    layout: '/admin',
    path: '/sales',
    icon: <Icon as={MdWeekend} width='20px' height='20px' color='inherit' />,

    component: SalesReport,
  },
  {
    name: 'Order List',
    layout: '/admin',
    path: '/order-list',
    icon: <Icon as={MdAddBox} width='20px' height='20px' color='inherit' />,

    component: OrderList,
  },
];

export default routes;
