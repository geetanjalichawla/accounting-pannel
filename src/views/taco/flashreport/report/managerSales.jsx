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


const ManagerSales = ({ manager, sendArrayToParent,data  }) => {

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

useEffect(() => {
  // Call your data processing functions
  const managers = ["Fabiola Theodore", "Hector Castillo"];
  const aggregatedData = [];

  managers.forEach((manager) => {
    // Filter data for the current manager
    if(data.length > 0 ){
    const filteredData = data.filter((item) => item.manager === manager);

    // Calculate totals for each column
    const totals = {
      manager,
      dailySalesCYTotal: calculateTotal('dailySalesCY', filteredData),
      dailySalesLYTotal: calculateTotal('dailySalesLY', filteredData),
      WTDSalesCYTotal: calculateTotal('WTDSalesCY', filteredData),
      WTDSalesLYTotal: calculateTotal('WTDSalesLY', filteredData),
      PTDSalesCYTotal:calculateTotal('PTDSalesCY', filteredData),
      PTDSalesLYTotal:calculateTotal('PTDSalesLY', filteredData),
      YTDSalesCYTotal:calculateTotal('YTDSalesCY', filteredData),
      YTDSalesLYTotal:calculateTotal('YTDSalesLY', filteredData),
      R13SalesCYTotal:calculateTotal('R13SalesCY', filteredData),
      R13SalesLYTotal:calculateTotal('R13SalesLY', filteredData),
    };

    // Calculate percentages if needed
    totals.dailySalesPercent = calculatePercentage(totals.dailySalesLYTotal, totals.dailySalesCYTotal);

    // Push the totals to the aggregatedData array
    aggregatedData.push(totals);
  }
});
  sendArrayToParent(aggregatedData);
}, [data]);
  return (
    <div>
       <Text fontSize='2xl'>{manager}</Text>

    
       <Box w={'full'} overflow={'auto'}> 
<Table
        variant="simple"
        bg={"white"}
        rounded={"lg"}
        overflow={"scroll"}
        w={"full"}
      >
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
              <Td >{row.dailySalesCY.toFixed(2)}</Td>
              <Td >{row.dailySalesLY.toFixed(2)}</Td>
              <Td >{(row.dailySalesCY - row.dailySalesLY).toFixed(2)}</Td>
              <Td >
                {calculatePercentage(row.dailySalesCY - row.dailySalesLY, row.dailySalesCY).toFixed(2)}%
              </Td>
              <Td >{row.WTDSalesCY.toFixed(2)}</Td>
              <Td >{row.WTDSalesLY.toFixed(2)}</Td>
              <Td >{(row.WTDSalesCY - row.WTDSalesLY).toFixed(2)}</Td>
              <Td >
                {calculatePercentage(row.WTDSalesCY - row.WTDSalesLY, row.WTDSalesCY).toFixed(2)}%
              </Td>
              {/* PTD Sales Data */}
              <Td >{row.PTDSalesCY.toFixed(2)}</Td>
              <Td >{row.PTDSalesLY.toFixed(2)}</Td>
              <Td >{(row.PTDSalesCY - row.PTDSalesLY).toFixed(2)}</Td>
              <Td >
                {calculatePercentage(row.PTDSalesCY - row.PTDSalesLY, row.PTDSalesCY).toFixed(2)}%
              </Td>
              {/* YTD Sales Data */}
              <Td >{row.YTDSalesCY.toFixed(2)}</Td>
              <Td >{row.YTDSalesLY.toFixed(2)}</Td>
              <Td >{(row.YTDSalesCY - row.YTDSalesLY).toFixed(2)}</Td>
              <Td >
                {calculatePercentage(row.YTDSalesCY - row.YTDSalesLY, row.YTDSalesCY).toFixed(2)}%
              </Td>
              {/* R13 Sales Data */}
              <Td >{row.R13SalesCY.toFixed(2)}</Td>
              <Td >{row.R13SalesLY.toFixed(2)}</Td>
              <Td >{(row.R13SalesCY - row.R13SalesLY).toFixed(2)}</Td>
              <Td >
                {calculatePercentage(row.R13SalesCY - row.R13SalesLY, row.R13SalesCY).toFixed(2)}%
              </Td>
            </Tr>
          ))}
           <Tr>
           <Td >Total</Td>
           <Td >{calculateTotal('dailySalesCY',filteredData).toFixed(2)}</Td>
            <Td >{calculateTotal('dailySalesLY',filteredData).toFixed(2)}</Td>
            <Td >{(calculateTotal('dailySalesCY',filteredData) - calculateTotal('dailySalesLY',filteredData)).toFixed(2)}</Td>
            <Td >
              {calculatePercentage(calculateTotal('dailySalesCY',filteredData) - calculateTotal('dailySalesLY',filteredData), calculateTotal('dailySalesCY',filteredData)).toFixed(2)}%
            </Td>
            <Td >{calculateTotal('WTDSalesCY',filteredData).toFixed(2)}</Td>
  <Td >{calculateTotal('WTDSalesLY',filteredData).toFixed(2)}</Td>
  <Td >{(calculateTotal('WTDSalesCY',filteredData) - calculateTotal('WTDSalesLY',filteredData)).toFixed(2)}</Td>
  <Td >
    {calculatePercentage(calculateTotal('WTDSalesCY',filteredData) - calculateTotal('WTDSalesLY',filteredData), calculateTotal('WTDSalesCY',filteredData)).toFixed(2)}%
  </Td>
            {/* Add other columns as needed */}
            <Td >{calculateTotal('PTDSalesCY',filteredData).toFixed(2)}</Td>
  <Td >{calculateTotal('PTDSalesLY',filteredData).toFixed(2)}</Td>
  <Td >{(calculateTotal('PTDSalesCY',filteredData) - calculateTotal('PTDSalesLY',filteredData)).toFixed(2)}</Td>
  <Td >
    {calculatePercentage(calculateTotal('PTDSalesCY',filteredData) - calculateTotal('PTDSalesLY',filteredData), calculateTotal('PTDSalesCY',filteredData)).toFixed(2)}%
  </Td>

  {/* YDT Sales */}
  <Td >{calculateTotal('YTDSalesCY',filteredData).toFixed(2)}</Td>
  <Td >{calculateTotal('YTDSalesLY',filteredData).toFixed(2)}</Td>
  <Td >{(calculateTotal('YTDSalesCY',filteredData) - calculateTotal('YTDSalesLY',filteredData)).toFixed(2)}</Td>
  <Td >
    {calculatePercentage(calculateTotal('YTDSalesCY',filteredData) - calculateTotal('YTDSalesLY',filteredData), calculateTotal('YTDSalesCY',filteredData)).toFixed(2)}%
  </Td>

  {/* R13 Sales */}
  <Td >{calculateTotal('R13SalesCY',filteredData).toFixed(2)}</Td>
  <Td >{calculateTotal('R13SalesLY',filteredData).toFixed(2)}</Td>
  <Td >{(calculateTotal('R13SalesCY',filteredData) - calculateTotal('R13SalesLY',filteredData)).toFixed(2)}</Td>
  <Td >
    {calculatePercentage(calculateTotal('R13SalesCY',filteredData) - calculateTotal('R13SalesLY',filteredData), calculateTotal('R13SalesCY',filteredData)).toFixed(2)}%
  </Td>
</Tr>
      </Tbody>
    </Table>
    </Box>
     {/* Table two */}
    
     <Box w={'full'} overflow={'auto'}> 
<Table
        variant="simple"
        bg={"white"}
        rounded={"lg"}
        overflow={"scroll"}
        w={"full"}
      >
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
              <Td >{row.dailySalesCY.toFixed(2)}</Td>
             
              {/* Transaction Count Data */}
              <Td >{row.dailyTransCountCY.toFixed(2)}</Td>
              <Td >{row.dailyTransCountLY.toFixed(2)}</Td>
              <Td >{(row.dailyTransCountCY - row.dailyTransCountLY).toFixed(2)}</Td>
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
              <Td >{(row.CashOverShort).toFixed(2)}</Td>
              {/* Del After Data */}
              {/* ... add Del After data columns similarly */}
             
              <Td >{row.DeletionsAfter.toFixed(2)}</Td>
              <Td >
                {calculatePercentage(row.DeletionsAfter , row.dailySalesCY).toFixed(2)}%
              </Td>
              {/* ICOS Data */}
              <Td >{row.ICOSVarPercent.toFixed(2)}</Td>
              <Td >{row.WTDICOSVarPercent.toFixed(2)}</Td>
            </Tr>
          ))}
          <Tr>
    <Td >Total</Td>
    <Td >{calculateTotal('dailySalesCY',filteredData).toFixed(2)}</Td>
    <Td >{calculateTotal('dailyTransCountCY',filteredData).toFixed(2)}</Td>
    <Td >{calculateTotal('dailyTransCountLY',filteredData).toFixed(2)}</Td>
    <Td >{(calculateTotal('dailyTransCountCY',filteredData) - calculateTotal('dailyTransCountLY',filteredData)).toFixed(2)}</Td>
    <Td >
      {calculatePercentage(
        calculateTotal('dailyTransCountCY',filteredData) - calculateTotal('dailyTransCountLY',filteredData),
        calculateTotal('dailyTransCountCY',filteredData)
      ).toFixed(2)}%
    </Td>
    <Td >{calculateTotal('dailySalesCY',filteredData).toFixed(2)}</Td>
    <Td >{calculateTotal('dailySalesLY',filteredData).toFixed(2)}</Td>
    <Td >
      {(calculateTotal('dailySalesCY',filteredData) - calculateTotal('dailySalesLY',filteredData)).toFixed(2)}
    </Td>
    <Td >
      {calculatePercentage(
        calculateTotal('dailySalesCY',filteredData) - calculateTotal('dailySalesLY',filteredData),
        calculateTotal('dailySalesCY',filteredData)
      ).toFixed(2)}%
    </Td>
    <Td >{calculateTotal('CashOverShort',filteredData).toFixed(2)}</Td>
    {/* Add total for Del After */}
    <Td >{calculateTotal('DeletionsAfter',filteredData).toFixed(2)}</Td>
    <Td >
      {(calculatePercentage(calculateTotal('DeletionsAfter',filteredData), calculateTotal('dailySalesCY',filteredData))).toFixed(2)}%
    </Td>
    
    {/* Add total for Del After */}
    <Td >{calculateTotal('ICOSVarPercent',filteredData).toFixed(2)}</Td>
    <Td >
      {calculateTotal('WTDICOSVarPercent',filteredData).toFixed(2)}
    </Td>
    {/* ... add total for other columns similarly */}
  </Tr>
        </Tbody>
      </Table>
      </Box>
    </div>
  );
};

export default ManagerSales;
