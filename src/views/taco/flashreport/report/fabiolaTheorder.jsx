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
const FabiolaTheodore = () => {
 
  const calculatePercentage = (value, base) => {
    return base !== 0 ? (value / base) * 100 : 0;
  };
  const divideValues = (value, base) => {
    if (base === 0) {
      return 0; // To avoid division by zero
    }
    return value / base;
  };
  const filteredData = data.filter((item) => item.manager === 'Fabiola Theodore');
    return (
      <div>
         <Text fontSize='3xl'>Fabiola Theodore</Text>

        {/* Table one */}
      <Table mt={30}>
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
            {/* Add sub-headers dynamically based on data */}
            {Array.from({ length: 5 }).map((_, index) => (
              <React.Fragment key={index}>
                <Td >CY</Td>
                <Td >LY</Td>
                <Td >.+/-</Td>
                <Td >%</Td>
              </React.Fragment>
            ))}
          </Tr>

          {/* Data Rows */}
          {filteredData.map((row) => (
            <Tr key={row._id}>
              <Td >{row.storeName}</Td>
              <Td >{row.dailySalesCY}</Td>
              <Td >{row.dailySalesLY}</Td>
              <Td >{row.dailySalesCY - row.dailySalesLY}</Td>
              <Td >
                {calculatePercentage(row.dailySalesCY - row.dailySalesLY, row.dailySalesCY).toFixed(2)}%
              </Td>
              <Td >{row.WTDSalesCY}</Td>
              <Td >{row.WTDSalesLY}</Td>
              <Td >{row.WTDSalesCY - row.WTDSalesLY}</Td>
              <Td >
                {calculatePercentage(row.WTDSalesCY - row.WTDSalesLY, row.WTDSalesCY).toFixed(2)}%
              </Td>
              {/* PTD Sales Data */}
              <Td >{row.PTDSalesCY}</Td>
              <Td >{row.PTDSalesLY}</Td>
              <Td >{row.PTDSalesCY - row.PTDSalesLY}</Td>
              <Td >
                {calculatePercentage(row.PTDSalesCY - row.PTDSalesLY, row.PTDSalesCY).toFixed(2)}%
              </Td>
              {/* YTD Sales Data */}
              <Td >{row.YTDSalesCY}</Td>
              <Td >{row.YTDSalesLY}</Td>
              <Td >{row.YTDSalesCY - row.YTDSalesLY}</Td>
              <Td >
                {calculatePercentage(row.YTDSalesCY - row.YTDSalesLY, row.YTDSalesCY).toFixed(2)}%
              </Td>
              {/* R13 Sales Data */}
              <Td >{row.R13SalesCY}</Td>
              <Td >{row.R13SalesLY}</Td>
              <Td >{row.R13SalesCY - row.R13SalesLY}</Td>
              <Td >
                {calculatePercentage(row.R13SalesCY - row.R13SalesLY, row.R13SalesCY).toFixed(2)}%
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
     {/* Table two */}
     <Table mt={30}>
        <Tbody>
          <Tr>
            <Td rowSpan={2} >
              Store
            </Td>
            <Td rowSpan={2} >
              Net Sales
            </Td>
            <Td colSpan={4} >
              Transaction Count
            </Td>
            <Td colSpan={4} >
              Avg Tckt
            </Td>
            <Td colSpan={1} >
              Cash
            </Td>
            <Td colSpan={2} >
              Del After
            </Td>
            <Td colSpan={2} >ICOS</Td>
          </Tr>
          <Tr>
            {/* Transaction Count Columns */}
            <Td >CY</Td>
            <Td >LY</Td>
            <Td >.+/-</Td>
            <Td >%</Td>
            {/* Avg Tckt Columns */}
            <Td >CY</Td>
            <Td >LY</Td>
            <Td >.+/-</Td>
            <Td >%</Td>
            {/* Cash Columns */}
            <Td >.+/-</Td>
            {/* Del After Columns */}
           
            <Td >$$</Td>
            <Td >%</Td>
            {/* ICOS Column */}
            <Td >Day</Td>
            <Td >WTD</Td>
          </Tr>

          {/* Data Rows */}
          {filteredData.map((row) => (
            <Tr key={row._id}>
              <Td >{row.storeName}</Td>
              {/* Net Sales Data */}
              <Td >{row.dailySalesCY}</Td>
             
              {/* Transaction Count Data */}
              <Td >{row.dailyTransCountCY}</Td>
              <Td >{row.dailyTransCountLY}</Td>
              <Td >{row.dailyTransCountCY - row.dailyTransCountLY}</Td>
              <Td >
                {calculatePercentage(row.dailyTransCountCY - row.dailyTransCountLY, row.dailyTransCountCY).toFixed(2)}%
              </Td>
              {/* Avg Tckt Data */}
              <Td >
                {divideValues(row.dailySalesCY, row.dailyTransCountCY).toFixed(2)}
              </Td>
              <Td >
                {divideValues(row.dailySalesLY, row.dailyTransCountLY).toFixed(2)}
              </Td>
              <Td >
  {`${divideValues(row.dailySalesCY, row.dailyTransCountCY).toFixed(2)} - ${divideValues(row.dailySalesLY, row.dailyTransCountLY).toFixed(2)}`}
</Td>

              <Td >
              0.00%
              </Td>
             
              {/* Cash Data */}
              {/* ... add Cash data columns similarly */}
              <Td >{row.CashOverShort}</Td>
              {/* Del After Data */}
              {/* ... add Del After data columns similarly */}
             
              <Td >{row.DeletionsAfter}</Td>
              <Td >
                {calculatePercentage(row.DeletionsAfter , row.dailySalesCY).toFixed(2)}%
              </Td>
              {/* ICOS Data */}
              <Td >{row.ICOSVarPercent}</Td>
              <Td >{row.WTDICOSVarPercent}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
    );
  };


export default FabiolaTheodore;