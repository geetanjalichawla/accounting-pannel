
import { Flex } from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";
import SearchTableOrders from "views/main/ecommerce/orderList/componnent/SearchTableOrders";
import { columnsDataOrders } from "views/main/ecommerce/orderList/varibale/columnsDataOrders";
import { dummyData } from "./varibale/columnsDataOrders";

export default function SearchUser() {
  return (
    <Flex direction='column' pt={{ sm: "125px", lg: "75px" }}>
      <Card px='0px'>
        <SearchTableOrders
          tableData={dummyData}
          columnsData={columnsDataOrders}
        />
      </Card>
    </Flex>
  );
}
