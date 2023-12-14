import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Box,
    Heading,
    HStack,
    Input,
    Text
  } from "@chakra-ui/react";
const RestaurantGroupReport= () => {
//   const cellStyle = {
//     borderBottom: '1px solid #000',
//     borderRight: '1px solid #000',
//     padding: '8px',
//     textAlign: 'center' , // Explicitly specify textAlign property
//   };
    return (
      <div>
        <Text fontSize='3xl'>Yum and Chill Restaurant Group</Text>
      <Table>
      <Tbody>
        <Tr>
          <Td rowSpan={2} >Product</Td>
          <Td colSpan={4} >Daily Sales</Td>
          <Td colSpan={4} >WTD Sales</Td>
          <Td colSpan={4} >PTD Sales</Td>
          <Td colSpan={4} >YDT Sales</Td>
          <Td colSpan={4} >R13 Sales</Td>
        </Tr>
        <Tr>
          {/* Daily Sales Columns */}
          <Td >CY</Td>
          <Td >LY</Td>
          <Td >.+/-</Td>
          <Td >%</Td>
          {/* WTD Sales Columns */}
          <Td >CY</Td>
          <Td >LY</Td>
          <Td >.+/-</Td>
          <Td >%</Td>
          <Td >CY</Td>
          <Td >LY</Td>
          <Td >.+/-</Td>
          <Td >%</Td>
          <Td >CY</Td>
          <Td >LY</Td>
          <Td >.+/-</Td>
          <Td >%</Td>
          <Td >CY</Td>
          <Td >LY</Td>
          <Td >.+/-</Td>
          <Td >%</Td>
        </Tr>

        {/* Data Rows */}
        <Tr>
          <Td >Yum & Chill</Td>
          <Td >0</Td>
          <Td >0</Td>
          <Td >00</Td>
          <Td >0</Td>
          <Td >0</Td>
          <Td >0</Td>
          <Td>00</Td>
          <Td>50</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>

        {/* Add more rows as needed */}
      </Tbody>
    </Table>
    </div>
    );
  };


export default RestaurantGroupReport;