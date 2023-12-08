import React from 'react';
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
// Define your table component
const AreaSummeryReport = ({ aggregatedData }) => {
    
    const cellStyle = {
        borderBottom: '1px solid #000',
        borderRight: '1px solid #000',
        padding: '8px',
        textAlign: 'center',
      };
    return (
        <div>
         <Text fontSize='3xl'>Yum & Chill Group Area Summary</Text>

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
     
        {aggregatedData.map((row, index) => (
          <Tr  key={index}>
            <Td >{row.manager}</Td>
            <Td >{row.dailySalesCYTotal}</Td>
            <Td >{row.dailySalesLYTotal}</Td>
            <Td >{/* Add your logic for .+/- here */}</Td>
            <Td >{/* Add your logic for % here */}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesLYTotal}</Td>
            <Td >{/* Add your logic for .+/- here */}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>
            <Td >{row.WTDSalesCYTotal}</Td>

          </Tr>
        ))}
      </Tbody>
    </Table>
    </div>
  );
};

export default AreaSummeryReport;