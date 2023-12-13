import React,{useEffect} from 'react';

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

const data = [
    {
      "_id": 29748,
      "storeName": "Jersey City",
      "storeCode": 29748,
      "manager": "Fabiola Theodore",
      "dailySalesCY": 89,
      "dailySalesLY": 0,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 0,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    },
    {
      "_id": 30685,
      "storeName": "Milltown",
      "storeCode": 30685,
      "manager": "Fabiola Theodore",
      "dailySalesCY": 50,
      "dailySalesLY": 0,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 0,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    },
    {
      "_id": 31281,
      "storeName": "East Brunswick",
      "storeCode": 31281,
      "manager": "Hector Castillo",
      "dailySalesCY": 0,
      "dailySalesLY": 0,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 0,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    },
    {
      "_id": 31508,
      "storeName": "Orange",
      "storeCode": 31508,
      "manager": "Hector Castillo",
      "dailySalesCY": 0,
      "dailySalesLY": 0,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 0,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    },
    {
      "_id": 32387,
      "storeName": "Somerville",
      "storeCode": 32387,
      "manager": "Fabiola Theodore",
      "dailySalesCY": 0,
      "dailySalesLY": 0,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 0,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    },
    {
      "_id": 32662,
      "storeName": "Irvington",
      "storeCode": 32662,
      "manager": "Hector Castillo",
      "dailySalesCY": 0,
      "dailySalesLY": 0,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 0,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    },
    {
      "_id": 34804,
      "storeName": "Bayonne",
      "storeCode": 34804,
      "manager": "Fabiola Theodore",
      "dailySalesCY": 0,
      "dailySalesLY": 0,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 0,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    },
    {
      "_id": 34806,
      "storeName": "South Brunswick",
      "storeCode": 34806,
      "manager": "Hector Castillo",
      "dailySalesCY": 0,
      "dailySalesLY": 0,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 0,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    },
    {
      "_id": 38857,
      "storeName": "Montgomery",
      "storeCode": 38857,
      "manager": "Fabiola Theodore",
      "dailySalesCY": 0,
      "dailySalesLY": 0,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 0,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    },
    {
      "_id": 40167,
      "storeName": "East Orange",
      "storeCode": 40167,
      "manager": "Hector Castillo",
      "dailySalesCY": 0,
      "dailySalesLY": 0,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 0,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    },
    {
      "_id": 40482,
      "storeName": "North brunswick",
      "storeCode": 40482,
      "manager": "Hector Castillo",
      "dailySalesCY": 89,
      "dailySalesLY": 50,
      "WTDSalesCY": 0,
      "WTDSalesLY": 0,
      "PTDSalesCY": 0,
      "PTDSalesLY": 0,
      "YTDSalesCY": 0,
      "YTDSalesLY": 0,
      "R13SalesCY": 0,
      "R13SalesLY": 70,
      "dailyTransCountCY": 0,
      "dailyTransCountLY": 0,
      "WTDTransCountCY": 0,
      "WTDTransCountLY": 0,
      "PTDTransCountCY": 0,
      "PTDTransCountLY": 0,
      "YTDTransCountCY": 0,
      "YTDTransCountLY": 0,
      "R13TransCountCY": 0,
      "R13TransCountLY": 0,
      "CashOverShort": 0,
      "DeletionsAfter": 0,
      "ICOSVarPercent": 0,
      "WTDICOSVarPercent": 0
    }
  ]
const ManagerSales = ({ manager, sendArrayToParent  }) => {

  const calculateTotal = (column, filteredData) => {
    return filteredData.reduce((total, row) => total + row[column], 0);
  };
  const calculatePercentage = (value, base) => {
    return base !== 0 ? (value / base) * 100 : 0;
  };
  const divideValues = (value, base) => {
    if (base === 0) {
      return 0; // To avoid division by zero
    }
    return value / base;
  };
  const filteredData = data.filter((item) => item.manager === manager);
  const managers = ["Fabiola Theodore", "Hector Castillo"];
const aggregatedData = [];

managers.forEach((manager) => {
  // Filter data for the current manager
  const filteredData = data.filter((item) => item.manager === manager);

  // Calculate totals for each column
  const totals = {
    manager,
    dailySalesCYTotal: calculateTotal('dailySalesCY', filteredData),
    dailySalesLYTotal: calculateTotal('dailySalesLY', filteredData),
    WTDSalesCYTotal: calculateTotal('WTDSalesCY', filteredData),
    WTDSalesLYTotal: calculateTotal('WTDSalesLY', filteredData),
    // Add other columns as needed
  };

  // Calculate percentages if needed
  totals.dailySalesPercent = calculatePercentage(totals.dailySalesLYTotal, totals.dailySalesCYTotal);

  // Push the totals to the aggregatedData array
  aggregatedData.push(totals);
});

// Now, aggregatedData will contain the aggregated totals for each manager
//console.log(aggregatedData);
useEffect(() => {
  sendArrayToParent(aggregatedData);
}, []);
  return (
    <div>
       <Text fontSize='3xl'>{manager}</Text>

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
           <Tr>
           <Td >Total</Td>
           <Td >{calculateTotal('dailySalesCY',filteredData)}</Td>
            <Td >{calculateTotal('dailySalesLY',filteredData)}</Td>
            <Td >{calculateTotal('dailySalesCY',filteredData) - calculateTotal('dailySalesLY',filteredData)}</Td>
            <Td >
              {calculatePercentage(calculateTotal('dailySalesCY',filteredData) - calculateTotal('dailySalesLY',filteredData), calculateTotal('dailySalesCY',filteredData)).toFixed(2)}%
            </Td>
            <Td >{calculateTotal('WTDSalesCY',filteredData)}</Td>
  <Td >{calculateTotal('WTDSalesLY',filteredData)}</Td>
  <Td >{calculateTotal('WTDSalesCY',filteredData) - calculateTotal('WTDSalesLY',filteredData)}</Td>
  <Td >
    {calculatePercentage(calculateTotal('WTDSalesCY',filteredData) - calculateTotal('WTDSalesLY',filteredData), calculateTotal('WTDSalesCY',filteredData)).toFixed(2)}%
  </Td>
            {/* Add other columns as needed */}
            <Td >{calculateTotal('PTDSalesCY',filteredData)}</Td>
  <Td >{calculateTotal('PTDSalesLY',filteredData)}</Td>
  <Td >{calculateTotal('PTDSalesCY',filteredData) - calculateTotal('PTDSalesLY',filteredData)}</Td>
  <Td >
    {calculatePercentage(calculateTotal('PTDSalesCY',filteredData) - calculateTotal('PTDSalesLY',filteredData), calculateTotal('PTDSalesCY',filteredData)).toFixed(2)}%
  </Td>

  {/* YDT Sales */}
  <Td >{calculateTotal('YTDSalesCY',filteredData)}</Td>
  <Td >{calculateTotal('YTDSalesLY',filteredData)}</Td>
  <Td >{calculateTotal('YTDSalesCY',filteredData) - calculateTotal('YTDSalesLY',filteredData)}</Td>
  <Td >
    {calculatePercentage(calculateTotal('YTDSalesCY',filteredData) - calculateTotal('YTDSalesLY',filteredData), calculateTotal('YTDSalesCY',filteredData)).toFixed(2)}%
  </Td>

  {/* R13 Sales */}
  <Td >{calculateTotal('R13SalesCY',filteredData)}</Td>
  <Td >{calculateTotal('R13SalesLY',filteredData)}</Td>
  <Td >{calculateTotal('R13SalesCY',filteredData) - calculateTotal('R13SalesLY',filteredData)}</Td>
  <Td >
    {calculatePercentage(calculateTotal('R13SalesCY',filteredData) - calculateTotal('R13SalesLY',filteredData), calculateTotal('R13SalesCY',filteredData)).toFixed(2)}%
  </Td>
</Tr>
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
          <Tr>
    <Td >Total</Td>
    <Td >{calculateTotal('dailySalesCY',filteredData)}</Td>
    <Td >{calculateTotal('dailyTransCountCY',filteredData)}</Td>
    <Td >{calculateTotal('dailyTransCountLY',filteredData)}</Td>
    <Td >{calculateTotal('dailyTransCountCY',filteredData) - calculateTotal('dailyTransCountLY',filteredData)}</Td>
    <Td >
      {calculatePercentage(
        calculateTotal('dailyTransCountCY',filteredData) - calculateTotal('dailyTransCountLY',filteredData),
        calculateTotal('dailyTransCountCY',filteredData)
      ).toFixed(2)}%
    </Td>
    <Td >{calculateTotal('dailySalesCY',filteredData)}</Td>
    <Td >{calculateTotal('dailySalesLY',filteredData)}</Td>
    <Td >
      {calculateTotal('dailySalesCY',filteredData) - calculateTotal('dailySalesLY',filteredData)}
    </Td>
    <Td >
      {calculatePercentage(
        calculateTotal('dailySalesCY',filteredData) - calculateTotal('dailySalesLY',filteredData),
        calculateTotal('dailySalesCY',filteredData)
      ).toFixed(2)}%
    </Td>
    <Td >{calculateTotal('CashOverShort',filteredData)}</Td>
    {/* Add total for Del After */}
    <Td >{calculateTotal('DeletionsAfter',filteredData)}</Td>
    <Td >
      {calculatePercentage(calculateTotal('DeletionsAfter',filteredData), calculateTotal('dailySalesCY',filteredData)).toFixed(2)}%
    </Td>
    
    {/* Add total for Del After */}
    <Td >{calculateTotal('ICOSVarPercent',filteredData)}</Td>
    <Td >
      {calculateTotal('WTDICOSVarPercent',filteredData)}
    </Td>
    {/* ... add total for other columns similarly */}
  </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default ManagerSales;