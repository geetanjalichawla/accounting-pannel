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
  const [week, setWeek] = useState(47);
  const [period, setPeriod] = useState(12);
  const [year, setYear] = useState(2023);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_FRONTEND}/week?client=wendys&week=${week}&period=${period}&year=${year}&download=false`
        );
        const jsonData = await response.json();
        console.log(jsonData.data);
        setData(jsonData.data); // Assuming the API response is an array of data objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleExport = ({
    totalFabiolaTheodore,
    totalHectorCastillo,
    columnHeaders,
  }) => {
    const wb = XLSX.utils.book_new();

    // Function to create a worksheet for a manager
    const createWorksheet = (manager) => {
      const managerData = data
        .filter((d) => d.manager === manager)
        .map((entry) => [
          entry.storeName + " (" + entry.storeCode + ")",
          entry.weeklySalesCY,
          entry.weeklySalesLY,
          entry.weeklySalesCY - entry.weeklySalesLY, // Sales Growth $
          ((entry.weeklySalesCY - entry.weeklySalesLY) / entry.weeklySalesLY) *
            100, // Sales Growth %
          entry.weeklyCYTrans,
          entry.weeklyLYTrans,
          entry.weeklyCYTrans - entry.weeklyLYTrans, // Trans Growth #
          ((entry.weeklyCYTrans - entry.weeklyLYTrans) / entry.weeklyLYTrans) *
            100, // Trans Growth %
          entry.weeklyGC,
          entry.weeklyLYGC,
          entry.weeklyGC - entry.weeklyLYGC, // GC Growth $
          ((entry.weeklyGC - entry.weeklyLYGC) / entry.weeklyLYGC) * 100, // GC Growth %
          entry.ICOSVarPercent,
          entry.LaborVar,
          entry.LaborCost,
          (entry.LaborCost / entry.weeklySalesCY) * 100, // Labor %
          entry.DeletionsAfter,
          entry.CashOverShort,
          entry.DrinkOrder,
          entry.DeliverySale,
          entry.KioskSale,
          entry.EmployeeMeal,
          entry.OTDOYPay,
          entry.OTHr,
          entry.ActualFoodCost,
          entry.ActualFoodCostPercent,
        ]);
      const ws = XLSX.utils.json_to_sheet(managerData);
      return managerData;
    };

    // Create worksheets for each manager
    const fabiolaWorksheet = createWorksheet("Fabiola Theodore");
    const hectorWorksheet = createWorksheet("Hector Castillo");

    // Define style for title rows (bold and larger font size)

    // Merge data into a single worksheet with styled title rows for each manager
    const combinedData = [
      ["Fabiola Theodore"],
      columnHeaders,
      ...fabiolaWorksheet,
      totalFabiolaTheodore,
      ["Hector Castillo"],
      columnHeaders,
      ...hectorWorksheet,
      totalHectorCastillo,
      ["total"],
      columnHeaders,
      [
        ...totalFabiolaTheodore?.map((d, i) =>
          i === 0
            ? "yums&chill"
            : totalFabiolaTheodore[i] + totalHectorCastillo[i] || "Chill"
        ),
      ],
    ];
    console.log(combinedData);
    const combinedWorksheet = XLSX.utils.json_to_sheet(combinedData, {
      opts: { "!cols": [{ width: 15 }] },
    });

    // Add the combined worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, combinedWorksheet, "Combined Data");

    // Save the workbook to a file
    XLSX.writeFile(wb, "store_data_combined.xlsx");
  };
  const FabiolaTheodore = data
    .filter((data) => data.manager === "Fabiola Theodore")
    .map((entry) => [
      entry.storeName + " (" + entry.storeCode + ")",
      entry.weeklySalesCY || 0,
      entry.weeklySalesLY || 0,
      entry.weeklySalesCY - entry.weeklySalesLY || 0, // Sales Growth $
      ((entry.weeklySalesCY - entry.weeklySalesLY) / entry.weeklySalesLY) * 100, // Sales Growth %
      entry.weeklyCYTrans || 0,
      entry.weeklyLYTrans || 0,
      entry.weeklyCYTrans - entry.weeklyLYTrans || 0, // Trans Growth #
      ((entry.weeklyCYTrans - entry.weeklyLYTrans) / entry.weeklyLYTrans) * 100, // Trans Growth %
      entry.weeklyGC || 0,
      entry.weeklyLYGC || 0,
      entry.weeklyGC - entry.weeklyLYGC || 0, // GC Growth $
      ((entry.weeklyGC - entry.weeklyLYGC) / entry.weeklyLYGC) * 100 || 0, // GC Growth %
      entry.ICOSVarPercent || 0,
      entry.LaborVar || 0,
      entry.LaborCost || 0,
      (entry.LaborCost / entry.weeklySalesCY) * 100 || 0, // Labor %
      entry.DeletionsAfter || 0,
      entry.CashOverShort || 0,
      entry.DrinkOrder || 0,
      entry.DeliverySale || 0,
      entry.KioskSale || 0,
      entry.EmployeeMeal || 0,
      entry.OTDOYPay || 0,
      entry.OTHr || 0,
      entry.ActualFoodCost || 0,
      entry.ActualFoodCostPercent || 0,
    ]);
  const HectorCastillo = data
    .filter((data) => data.manager === "Hector Castillo")
    .map((entry) => [
      entry.storeName + " (" + entry.storeCode + ")",
      entry.weeklySalesCY || 0,
      entry.weeklySalesLY || 0,
      entry.weeklySalesCY - entry.weeklySalesLY || 0, // Sales Growth $
      ((entry.weeklySalesCY - entry.weeklySalesLY) / entry.weeklySalesLY) * 100, // Sales Growth %
      entry.weeklyCYTrans || 0,
      entry.weeklyLYTrans || 0,
      entry.weeklyCYTrans - entry.weeklyLYTrans || 0, // Trans Growth #
      ((entry.weeklyCYTrans - entry.weeklyLYTrans) / entry.weeklyLYTrans) * 100, // Trans Growth %
      entry.weeklyGC || 0,
      entry.weeklyLYGC || 0,
      entry.weeklyGC - entry.weeklyLYGC || 0, // GC Growth $
      ((entry.weeklyGC - entry.weeklyLYGC) / entry.weeklyLYGC) * 100 || 0, // GC Growth %
      entry.ICOSVarPercent || 0,
      entry.LaborVar || 0,
      entry.LaborCost || 0,
      (entry.LaborCost / entry.weeklySalesCY) * 100 || 0, // Labor %
      entry.DeletionsAfter || 0,
      entry.CashOverShort || 0,
      entry.DrinkOrder || 0,
      entry.DeliverySale || 0,
      entry.KioskSale || 0,
      entry.EmployeeMeal || 0,
      entry.OTDOYPay || 0,
      entry.OTHr || 0,
      entry.ActualFoodCost || 0,
      entry.ActualFoodCostPercent || 0,
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
    "Actual Food Cost %",
  ];
  console.log({ FabiolaTheodore, HectorCastillo });
  const calculateTotal = (entries) =>
    entries.reduce((total, entry) => {
      // Iterate over each property and sum the values
      entry.forEach((value, index) => {
        // Skip the first element, which is the storeName
        if (index !== 0) {
          total[index] = (total[index] || 0) + value;
        } else total[index] = 0;
      });
      return total;
    }, []);

  // Calculate totals for FabiolaTheodore and HectorCastillo
  const totalFabiolaTheodore = calculateTotal(FabiolaTheodore);
  const totalHectorCastillo = calculateTotal(HectorCastillo);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} w="100%">
      <HStack mb={2} gap={2}>
        {/* Add dynamic input fields for week, period, and year */}
        <Input
          type="number"
          placeholder="Week"
          value={week}
          onChange={(e) => setWeek(parseInt(e.target.value))}
        />
        <Input
          type="number"
          placeholder="Period"
          value={period}
          onChange={(e) => setPeriod(parseInt(e.target.value))}
        />
      </HStack>
      <HStack mb={2} gap={2}>
        <Input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
        />
        <Button
          w={"full"}
          colorScheme="brand"
          onClick={() =>
            handleExport({
              totalFabiolaTheodore,
              totalHectorCastillo,
              columnHeaders,
            })
          }
        >
          Export to Excel
        </Button>
      </HStack>

      <Heading bg={"white"} rounded={"lg"} textAlign={"center"} py={2}>
        Company Sums / Averages{" "}
      </Heading>

      <Box w={"full"} overflow={"auto"}>
        <Table
          variant="simple"
          bg={"white"}
          rounded={"lg"}
          overflow={"scroll"}
          w={"full"}
        >
          <Thead>
            <Tr>
              {columnHeaders.map((col) => (
                <Th>{col === Infinity ? 0 : col || 0}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {totalFabiolaTheodore.map((col, index) => (
            <>{index === 0 ? <Td>{'total'}</Td>:<Td>{parseFloat((totalFabiolaTheodore[index] + totalHectorCastillo[index]) === Infinity ? 0 : (totalFabiolaTheodore[index] + totalHectorCastillo[index]) || 0).toFixed(2)}</Td>}
            </>  ))}
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Heading bg={"white"} rounded={"lg"} textAlign={"center"} py={2}>
        Fabiola Theodore
      </Heading>

      <Box w={"full"} overflow={"auto"}>
        <Table
          variant="simple"
          bg={"white"}
          rounded={"lg"}
          overflow={"scroll"}
          w={"full"}
        >
          <Thead>
            <Tr>
              {columnHeaders.map((col,index) => (
                  index === 0 ? <Td>{col}</Td>:<Td>{col}</Td>
                  ))}
            </Tr>
          </Thead>
          <Tbody>
            {FabiolaTheodore.map((store) => (
              <Tr key={store._id}>
                {store.map((col,index) => (
                  index === 0 ? <Td>{col}</Td>:<Td>{parseFloat(col === Infinity ? 0 : col || 0).toFixed(2)}</Td>
                  ))}
              </Tr>
            ))}
            <Tr>
              {totalFabiolaTheodore.map((col) => (
                <Td>{parseFloat(col === Infinity ? 0 : col || 0).toFixed(2)}</Td>
                ))}
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Heading bg={"white"} rounded={"lg"} textAlign={"center"} py={2}>
        Hector Castillo
      </Heading>
      <Box w={"full"} overflow={"auto"}>
        <Table
          variant="simple"
          bg={"white"}
          rounded={"lg"}
          overflow={"scroll"}
          w={"full"}
        >
          <Thead>
            <Tr>
              {columnHeaders.map((col) => (
                <Td>{col}</Td>
                              ))}
            </Tr>
          </Thead>
          <Tbody>
            {HectorCastillo.map((store) => (
              <Tr key={store._id}>
                {store.map((col,index) => (
                  index === 0 ? <Td>{col}</Td>:<Td>{parseFloat(col === Infinity ? 0 : col || 0).toFixed(2)}</Td>
                ))}
              </Tr>
            ))}
            <Tr>
              {totalHectorCastillo.map((col,index) => (
                  index === 0 ? <Td>{col}</Td>:<Td>{parseFloat(col === Infinity ? 0 : col || 0).toFixed(2)}</Td>
              ))}
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default ExportToExcel;
