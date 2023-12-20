import React, { useState } from 'react';
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
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
// Define your table component
const AreaSummeryReport = ({ aggregatedData, summaryData }) => {
  const calculateTotal = (column) => {
    return aggregatedData.reduce((totalRow, row) => totalRow + row[column], 0);
  };
  let totalRow = {};
   let summary=[]
  useEffect(() => {
    // Call your data processing functions
    if (aggregatedData.length > 0) {
      totalRow = {
        dailySalesCYTotal: calculateTotal('dailySalesCYTotal'),
        dailySalesLYTotal: calculateTotal('dailySalesLYTotal'),
        WTDSalesCYTotal: calculateTotal('WTDSalesCYTotal'),
        WTDSalesLYTotal: calculateTotal('WTDSalesLYTotal'),
        PTDSalesCYTotal: calculateTotal('PTDSalesCYTotal'),
        PTDSalesLYTotal: calculateTotal('PTDSalesLYTotal'),
        YTDSalesCYTotal: calculateTotal('YTDSalesCYTotal'),
        YTDSalesLYTotal: calculateTotal('YTDSalesLYTotal'),
        R13SalesCYTotal: calculateTotal('R13SalesCYTotal'),
        R13SalesLYTotal: calculateTotal('R13SalesLYTotal'),
      };

      summary.push(totalRow);
    }
    summaryData(summary);
  }, [aggregatedData]);

  const calculatePercentage = (value, base) => {
    return base !== 0 ? (value / base) * 100 : 0;
  };

  const divideValues = (value, base) => {
    if (base === 0) {
      return 0; // To avoid division by zero
    }
    return value / base;
  };

  const calculateDifference = (value1, value2) => {
    return value1 - value2;
  };

  return (
    <div>
      <Text fontSize='2xl'>Yum & Chill Group Area Summary</Text>

      <Box w={'full'} overflow={'auto'}>
        <Table
          variant='simple'
          bg={'white'}
          rounded={'lg'}
          overflow={'scroll'}
          w={'full'}
        >
          <Tbody>
            <Tr>
              <Td rowSpan={2}>Product</Td>
              <Td colSpan={4}>Daily Sales</Td>
              <Td colSpan={4}>WTD Sales</Td>
              <Td colSpan={4}>PTD Sales</Td>
              <Td colSpan={4}>YDT Sales</Td>
              <Td colSpan={4}>R13 Sales</Td>
            </Tr>
            <Tr>
              {/* Add sub-headers dynamically based on data */}
              {Array.from({ length: 5 }).map((_, index) => (
                <React.Fragment key={index}>
                  <Td>CY</Td>
                  <Td>LY</Td>
                  <Td>.+/-</Td>
                  <Td>%</Td>
                </React.Fragment>
              ))}
            </Tr>
            {aggregatedData.map((row, index) => (
              <Tr key={index}>
                <Td>{row.manager}</Td>
                <Td>{row.dailySalesCYTotal}</Td>
                <Td>{row.dailySalesLYTotal}</Td>
                <Td>
                  {calculateDifference(
                    row.dailySalesCYTotal,
                    row.dailySalesLYTotal
                  )}
                </Td>
                <Td>
                  {calculatePercentage(
                    calculateDifference(
                      row.dailySalesCYTotal,
                      row.dailySalesLYTotal
                    ),
                    row.dailySalesCYTotal
                  )}
                </Td>
                <Td>{row.WTDSalesCYTotal}</Td>
                <Td>{row.WTDSalesLYTotal}</Td>
                <Td>
                  {calculateDifference(
                    row.WTDSalesCYTotal,
                    row.WTDSalesLYTotal
                  )}
                </Td>
                <Td>
                  {calculatePercentage(
                    calculateDifference(
                      row.WTDSalesCYTotal,
                      row.WTDSalesLYTotal
                    ),
                    row.WTDSalesCYTotal
                  )}
                </Td>
                <Td>{row.PTDSalesCYTotal}</Td>
                <Td>{row.PTDSalesLYTotal}</Td>
                <Td>
                  {calculateDifference(
                    row.PTDSalesCYTotal,
                    row.PTDSalesLYTotal
                  )}
                </Td>
                <Td>
                  {calculatePercentage(
                    calculateDifference(
                      row.PTDSalesCYTotal,
                      row.PTDSalesLYTotal
                    ),
                    row.PTDSalesCYTotal
                  )}
                </Td>
                <Td>{row.YTDSalesCYTotal}</Td>
                <Td>{row.YTDSalesLYTotal}</Td>
                <Td>
                  {calculateDifference(
                    row.YTDSalesCYTotal,
                    row.YTDSalesLYTotal
                  )}
                </Td>
                <Td>
                  {calculatePercentage(
                    calculateDifference(
                      row.YTDSalesCYTotal,
                      row.YTDSalesLYTotal
                    ),
                    row.YTDSalesCYTotal
                  )}
                </Td>
                <Td>{row.R13SalesCYTotal}</Td>
                <Td>{row.R13SalesLYTotal}</Td>
                <Td>
                  {calculateDifference(
                    row.R13SalesCYTotal,
                    row.R13SalesLYTotal
                  )}
                </Td>
                <Td>
                  {calculatePercentage(
                    calculateDifference(
                      row.R13SalesCYTotal,
                      row.R13SalesLYTotal
                    ),
                    row.R13SalesCYTotal
                  )}
                </Td>
              </Tr>
            ))}
           
            <Tr>
              <Td>Total</Td>
              <Td>{calculateTotal('dailySalesCYTotal')}</Td>
              <Td>{calculateTotal('dailySalesLYTotal')}</Td>
              <Td>
                {calculateTotal('dailySalesCYTotal') -
                  calculateTotal('dailySalesLYTotal')}
              </Td>
              <Td>
                {calculatePercentage(
                  calculateTotal('dailySalesCYTotal') -
                    calculateTotal('dailySalesLYTotal'),
                  calculateTotal('dailySalesCYTotal')
                ).toFixed(2)}
                %
              </Td>

              {/* Similar calculations for WTDSales */}
              <Td>{calculateTotal('WTDSalesCYTotal')}</Td>
              <Td>{calculateTotal('WTDSalesLYTotal')}</Td>
              <Td>
                {calculateTotal('WTDSalesCYTotal') -
                  calculateTotal('WTDSalesLYTotal')}
              </Td>
              <Td>
                {calculatePercentage(
                  calculateTotal('WTDSalesCYTotal') -
                    calculateTotal('WTDSalesLYTotal'),
                  calculateTotal('WTDSalesCYTotal')
                ).toFixed(2)}
                %
              </Td>

              {/* Similar calculations for PTDSales */}
              <Td>{calculateTotal('PTDSalesCYTotal')}</Td>
              <Td>{calculateTotal('PTDSalesLYTotal')}</Td>
              <Td>
                {calculateTotal('PTDSalesCYTotal') -
                  calculateTotal('PTDSalesLYTotal')}
              </Td>
              <Td>
                {calculatePercentage(
                  calculateTotal('PTDSalesCYTotal') -
                    calculateTotal('PTDSalesLYTotal'),
                  calculateTotal('PTDSalesCYTotal')
                ).toFixed(2)}
                %
              </Td>

              {/* Similar calculations for YTDSales */}
              <Td>{calculateTotal('YTDSalesCYTotal')}</Td>
              <Td>{calculateTotal('YTDSalesLYTotal')}</Td>
              <Td>
                {calculateTotal('YTDSalesCYTotal') -
                  calculateTotal('YTDSalesLYTotal')}
              </Td>
              <Td>
                {calculatePercentage(
                  calculateTotal('YTDSalesCYTotal') -
                    calculateTotal('YTDSalesLYTotal'),
                  calculateTotal('YTDSalesCYTotal')
                ).toFixed(2)}
                %
              </Td>

              {/* Similar calculations for R13Sales */}
              <Td>{calculateTotal('R13SalesCYTotal')}</Td>
              <Td>{calculateTotal('R13SalesLYTotal')}</Td>
              <Td>
                {calculateTotal('R13SalesCYTotal') -
                  calculateTotal('R13SalesLYTotal')}
              </Td>
              <Td>
                {calculatePercentage(
                  calculateTotal('R13SalesCYTotal') -
                    calculateTotal('R13SalesLYTotal'),
                  calculateTotal('R13SalesCYTotal')
                ).toFixed(2)}
                %
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </div>
  );
};

export default AreaSummeryReport;
