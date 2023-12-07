import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import * as XLSX from "xlsx";

const ExportToExcel = () => {
    const [startDate, setStartDate] = useState("2023-11-15");
    const [endDate, setEndDate] = useState("2023-11-22");
    const [data, setData] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                `https://portal-backend-mhgo.onrender.com/week?client=tacobell&startDate=${startDate}&endDate=${endDate}&download=false`
              );
              const jsonData = await response.json();
              console.log(jsonData.data)
              setData(jsonData.data); // Assuming the API response is an array of data objects
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          // Fetch data when startDate or endDate changes
          if (startDate && endDate) {
            fetchData();
          }
        }, [startDate, endDate]);
    
        
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
      
        const calculateTotal = (entries) => {
            const total = entries.reduce((acc, entry) => {
              entry.forEach((value, index) => {
                if (index !== 0) {
                  acc[index] = (acc[index] || 0) + value;
                }
              });
              return acc;
            }, []);
          
            // Calculate averages (if needed)
            const totalCount = entries.length;
            return total.map((sum) => sum / totalCount);
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
            ...XLSX.utils.sheet_to_json(hectorWorksheet),
            ['Company Sums / Averages'],
            ['Yum&Chill',...calculateTotal(totalFabiolaTheodore),]
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
      console.log({FabiolaTheodore,HectorCastillo})
      const calculateTotal = (entries) => entries.reduce((total, entry) => {
        // Iterate over each property and sum the values
        entry.forEach((value, index) => {
          // Skip the first element, which is the storeName
          if (index !== 0) {
            total[index] = (total[index] || 0) + value;
          }
        });
        return total;
      }, []);
      
      // Calculate totals for FabiolaTheodore and HectorCastillo
      const totalFabiolaTheodore = calculateTotal(FabiolaTheodore);
      const totalHectorCastillo = calculateTotal(HectorCastillo);
      
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} w="100%">
      <HStack bg={'white'}>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        
      </HStack>
      <Button onClick={handleExport}>Export to Excel</Button>

      <Heading bg={"white"} rounded={"lg"} textAlign={"center"} py={2}>
      Company Sums / Averages      </Heading>

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
              <Tr>
                <Td>Yum&Chill</Td>
                {
                    totalFabiolaTheodore.map((store , index)=><Td>{totalFabiolaTheodore[index] + totalHectorCastillo[index]}</Td>)
                }
            </Tr>
        </Tbody>
      </Table>

</Box>

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
              <Tr>
                <Td>sum / avarages</Td>
                {
                    totalFabiolaTheodore.map(store=><Td>{store}</Td>)
                }
            </Tr>
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
          {columnHeaders.map(col=><Th>{col}</Th>)
 }
          </Tr>
        </Thead>
        <Tbody>
          {
           HectorCastillo.map((store) => (
              <Tr key={store._id}>
                {
                    store.map(store=><Td>{store}</Td>)
                }
              </Tr>
            ))}
            <Tr>
                <Td>sum / avarages</Td>
                {
                    totalHectorCastillo.map(store=><Td>{store}</Td>)
                }
            </Tr>
        </Tbody>
      </Table>
      </Box>
    </Box>
  );
};

export default ExportToExcel;



