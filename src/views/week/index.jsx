import React from "react";
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
} from "@chakra-ui/react";
import * as XLSX from "xlsx";
const data = [
    {
        "_id": 29748,
        "storeName": "Jersey City",
        "storeCode": 29748,
        "manager": "Fabiola Theodore",
        "weeklySalesCY": 3013.91,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.46,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": -103.77000000000001,
        "DeliverySale": 4.0600000000000005,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 381.09,
        "OTHr": 380.41999999999996
    },
    {
        "_id": 30685,
        "storeName": "Milltown",
        "storeCode": 30685,
        "manager": "Fabiola Theodore",
        "weeklySalesCY": 4423.67,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.35,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": -10.65,
        "DeliverySale": 5.03,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 456.6,
        "OTHr": 438.82
    },
    {
        "_id": 31281,
        "storeName": "East Brunswick",
        "storeCode": 31281,
        "manager": "Hector Castillo",
        "weeklySalesCY": 6522.89,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.4,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": 0,
        "DeliverySale": 5.12,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 590.89,
        "OTHr": 590.45
    },
    {
        "_id": 31508,
        "storeName": "Orange",
        "storeCode": 31508,
        "manager": "Hector Castillo",
        "weeklySalesCY": 8454.85,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.34,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": 0,
        "DeliverySale": 5.36,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 652.14,
        "OTHr": 649.57
    },
    {
        "_id": 32387,
        "storeName": "Somerville",
        "storeCode": 32387,
        "manager": "Fabiola Theodore",
        "weeklySalesCY": 7992.43,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.71,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": 0,
        "DeliverySale": 5.66,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 848.14,
        "OTHr": 848.14
    },
    {
        "_id": 32662,
        "storeName": "Irvington",
        "storeCode": 32662,
        "manager": "Hector Castillo",
        "weeklySalesCY": 6786.89,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.42,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": 0,
        "DeliverySale": 6.67,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 446.74,
        "OTHr": 440.11
    },
    {
        "_id": 34804,
        "storeName": "Bayonne",
        "storeCode": 34804,
        "manager": "Fabiola Theodore",
        "weeklySalesCY": 4389.15,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.67,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": 0,
        "DeliverySale": 5.57,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 737.77,
        "OTHr": 721.28
    },
    {
        "_id": 34806,
        "storeName": "South Brunswick",
        "storeCode": 34806,
        "manager": "Hector Castillo",
        "weeklySalesCY": 5019.65,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.33,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": 0,
        "DeliverySale": 5.36,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 612.85,
        "OTHr": 612.54
    },
    {
        "_id": 38857,
        "storeName": "Montgomery",
        "storeCode": 38857,
        "manager": "Fabiola Theodore",
        "weeklySalesCY": 3702.2200000000003,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.6300000000000001,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": 1.93,
        "DeliverySale": 3.9699999999999998,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 397.73,
        "OTHr": 395.75
    },
    {
        "_id": 40167,
        "storeName": "East Orange",
        "storeCode": 40167,
        "manager": "Hector Castillo",
        "weeklySalesCY": 5377.01,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.4100000000000001,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": -786.73,
        "DeliverySale": 5.73,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 400.89,
        "OTHr": 395.63
    },
    {
        "_id": 40482,
        "storeName": "North brunswick",
        "storeCode": 40482,
        "manager": "Hector Castillo",
        "weeklySalesCY": 4215.67,
        "weeklySalesLY": 0,
        "weeklyCYTrans": 0,
        "weeklyLYTrans": 0,
        "ICOSVarPercent": 1.33,
        "LaborVar": 0,
        "LaborCost": 0,
        "DeletionsAfter": 0,
        "CashOverShort": 0,
        "DrinkOrder": 0,
        "DeliverySale": 5.65,
        "KioskSale": 0,
        "EmployeeMeal": 0,
        "OTDOYPay": 370.59000000000003,
        "OTHr": 370.59000000000003
    }
]
const ExportToExcel = () => {

    const handleExport = () => {
        const wb = XLSX.utils.book_new();
      
        // Function to create a worksheet for a manager
        const createWorksheet = (manager) => {
          const managerData = data.filter((d) => d.manager === manager).map((entry) => [
            entry.storeName + ' (' + entry.storeCode  + ')',
            entry.weeklySalesCY,
            entry.weeklySalesLY,
            entry.weeklySalesCY - entry.weeklySalesLY,  // Sales Growth $
            (entry.weeklySalesCY - entry.weeklySalesLY) / entry.weeklySalesLY * 100,  // Sales Growth %
            entry.weeklyCYTrans,
            entry.weeklyLYTrans,
            entry.weeklyCYTrans - entry.weeklyLYTrans,  // Trans Growth #
            (entry.weeklyCYTrans - entry.weeklyLYTrans) / entry.weeklyLYTrans * 100,  // Trans Growth %
            entry.weeklyGC,
            entry.weeklyLYGC,
            entry.weeklyGC - entry.weeklyLYGC,  // GC Growth $
            (entry.weeklyGC - entry.weeklyLYGC) / entry.weeklyLYGC * 100,  // GC Growth %
            entry.ICOSVarPercent,
            entry.LaborVar,
            entry.LaborCost,
            entry.LaborCost / entry.weeklySalesCY * 100,  // Labor %
            entry.DeletionsAfter,
            entry.CashOverShort,
            entry.DrinkOrder,
            entry.DeliverySale,
            entry.KioskSale,
            entry.EmployeeMeal,
            entry.OTDOYPay,
            entry.OTHr,
            entry.ActualFoodCost,
            entry.ActualFoodCostPercent
          ]);
          const ws = XLSX.utils.json_to_sheet(managerData);
          return ws;
        };
      
        // Create worksheets for each manager
        const fabiolaWorksheet = createWorksheet("Fabiola Theodore");
        const hectorWorksheet = createWorksheet("Hector Castillo");
      
        // Define style for title rows (bold and larger font size)
        const titleStyle = XLSX.utils.book_new().SS[0].Styles['Title'];
        const titleOpts = { font: { bold: true, sz: 14 } }; // Bold and font size 14
      
        // Merge data into a single worksheet with styled title rows for each manager
        const combinedData = [
          ['Fabiola Theodore'],
          ...XLSX.utils.sheet_to_json(fabiolaWorksheet),
         ['Hector Castillo'],
          ...XLSX.utils.sheet_to_json(hectorWorksheet)
        ];
        const combinedWorksheet = XLSX.utils.json_to_sheet(combinedData, { opts: { '!cols': [{ width: 15 }] } });
      
        // Add the combined worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, combinedWorksheet, "Combined Data");
      
        // Save the workbook to a file
        XLSX.writeFile(wb, "store_data_combined.xlsx");
      };
      const FabiolaTheodore = data.filter((data) => data.manager === "Fabiola Theodore").map((entry) => [
        entry.storeName + ' (' + entry.storeCode  + ')',
        entry.weeklySalesCY,
        entry.weeklySalesLY,
        entry.weeklySalesCY - entry.weeklySalesLY,  // Sales Growth $
        (entry.weeklySalesCY - entry.weeklySalesLY) / entry.weeklySalesLY * 100,  // Sales Growth %
        entry.weeklyCYTrans,
        entry.weeklyLYTrans,
        entry.weeklyCYTrans - entry.weeklyLYTrans,  // Trans Growth #
        (entry.weeklyCYTrans - entry.weeklyLYTrans) / entry.weeklyLYTrans * 100,  // Trans Growth %
        entry.weeklyGC,
        entry.weeklyLYGC,
        entry.weeklyGC - entry.weeklyLYGC,  // GC Growth $
        (entry.weeklyGC - entry.weeklyLYGC) / entry.weeklyLYGC * 100,  // GC Growth %
        entry.ICOSVarPercent,
        entry.LaborVar,
        entry.LaborCost,
        entry.LaborCost / entry.weeklySalesCY * 100,  // Labor %
        entry.DeletionsAfter,
        entry.CashOverShort,
        entry.DrinkOrder,
        entry.DeliverySale,
        entry.KioskSale,
        entry.EmployeeMeal,
        entry.OTDOYPay,
        entry.OTHr,
        entry.ActualFoodCost,
        entry.ActualFoodCostPercent
      ]);
      const HectorCastillo = data.filter((data) => data.manager === "Hector Castillo").map((entry) => [
        entry.storeName + ' (' + entry.storeCode  + ')',
        entry.weeklySalesCY,
        entry.weeklySalesLY,
        entry.weeklySalesCY - entry.weeklySalesLY,  // Sales Growth $
        (entry.weeklySalesCY - entry.weeklySalesLY) / entry.weeklySalesLY * 100,  // Sales Growth %
        entry.weeklyCYTrans,
        entry.weeklyLYTrans,
        entry.weeklyCYTrans - entry.weeklyLYTrans,  // Trans Growth #
        (entry.weeklyCYTrans - entry.weeklyLYTrans) / entry.weeklyLYTrans * 100,  // Trans Growth %
        entry.weeklyGC,
        entry.weeklyLYGC,
        entry.weeklyGC - entry.weeklyLYGC,  // GC Growth $
        (entry.weeklyGC - entry.weeklyLYGC) / entry.weeklyLYGC * 100,  // GC Growth %
        entry.ICOSVarPercent,
        entry.LaborVar,
        entry.LaborCost,
        entry.LaborCost / entry.weeklySalesCY * 100,  // Labor %
        entry.DeletionsAfter,
        entry.CashOverShort,
        entry.DrinkOrder,
        entry.DeliverySale,
        entry.KioskSale,
        entry.EmployeeMeal,
        entry.OTDOYPay,
        entry.OTHr,
        entry.ActualFoodCost,
        entry.ActualFoodCostPercent
      ]);

      let columnHeaders = [
        "Store",
        "CY Net Sales",
        "LY Net Sales",
        "Sales Growth $",
        "Sales Growth %",
        "CY Trans",
        "LY Trans",
        "Trans Growth #",
        "Trans Growth %",
        "CY GC Average",
        "LY GC Average",
        "GC Growth $",
        "GC Growth %",
        "ICOS Var %",
        "Labor Var (h)",
        "Labor Cost",
        "Labor %",
        "Deletions After $",
        "Cash Over Short",
        "Drinks /Order",
        "Delivery Sales",
        "Kiosk Sales",
        "Employee Meal $",
        "OTD $",
        "OT Hours",
        "Actual Food Cost",
        "Actual Food Cost %"
      ];
      
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} w="100%">
      <Heading bg={"white"} rounded={"lg"} textAlign={"center"} py={2}>
        Fabiola Theodore
      </Heading>

<Box w={'full'} overflow={'auto'}> 
<Table
        variant="simple"
        bg={"white"}
        rounded={"lg"}
        overflow={"scroll"}
        w={"full"}
      >
        <Thead>
          <Tr>
          {columnHeaders.map(col=><Th>{col}</Th>)
 }
          </Tr>
        </Thead>
        <Tbody>
          {
           FabiolaTheodore.map((store) => (
              <Tr key={store._id}>
                {
                    store.map(store=><Td>{store}</Td>)
                }
              </Tr>
            ))}
        </Tbody>
      </Table>

</Box>
      <Heading bg={"white"} rounded={"lg"} textAlign={"center"} py={2}>
        Hector Castillo
      </Heading>
      <Box w={'full'} overflow={'auto'}> 

      <Table
        variant="simple"
        bg={"white"}
        rounded={"lg"}
        overflow={"scroll"}
        w={"full"}
      >
        <Thead>
          <Tr>
            <Th>Store</Th>
            <Th>CY Net Sales</Th>
            <Th>LY Net Sales</Th>
            <Th>weeklyCYTrans</Th>
            <Th>weeklyLYTrans</Th>
            <Th>ICOSVarPercent</Th>
            <Th>LaborVar</Th>
            <Th>LaborCost</Th>
            <Th>DeletionsAfter</Th>
            <Th>CashOverShort</Th>
            <Th>DrinkOrder</Th>
            <Th>DeliverySale</Th>
            <Th>KioskSale</Th>
            <Th>EmployeeMeal</Th>
            <Th>OTDOYPay</Th>
            <Th>OTHr</Th>
            <Th>Sums / Averages</Th>
          </Tr>
        </Thead>
        <Tbody>
          {     HectorCastillo.map((store) => (
              <Tr key={store._id}>
                <Td>{store.storeName}</Td>
                <Td>{store.weeklySalesCY}</Td>
                <Td>{store.weeklySalesLY}</Td>
                <Td>{store.weeklyCYTrans}</Td>
                <Td>{store.weeklyLYTrans}</Td>
                <Td>{store.ICOSVarPercent}</Td>
                <Td>{store.LaborVar}</Td>
                <Td>{store.LaborCost}</Td>
                <Td>{store.DeletionsAfter}</Td>
                <Td>{store.CashOverShort}</Td>
                <Td>{store.DrinkOrder}</Td>
                <Td>{store.DeliverySale}</Td>
                <Td>{store.KioskSale}</Td>
                <Td>{store.EmployeeMeal}</Td>
                <Td>{store.OTDOYPay}</Td>
                <Td>{store.OTHr}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
      </Box>
      <Button onClick={handleExport}>Export to Excel</Button>
    </Box>
  );
};

export default ExportToExcel;



