
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { Box, Button, Flex, HStack, Heading, Input, SimpleGrid, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';

const SalesReport = () => {
  const [data, setData] = useState(null);
  const [week, setWeek] = useState(47);
  const [period, setPeriod] = useState(12);
  const [year, setYear] = useState(2023);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_FRONTEND}/wendys/weekly-report/weekly-employeeProductivity?week=${week}&period=${period}&year=${year}`);
        const apiData = response.data;
        setData(apiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [week, period, year]);

  const handleDownload = () => {
    if (data) {
      const wb = XLSX.utils.book_new();
      let sheetData = [];

      Object.keys(data.data).forEach((repKey) => {
        const reporti = data.data[repKey];

        sheetData = [
          ...sheetData,
          [repKey],
        ];

        Object.keys(reporti).forEach((reportKey) => {
          const report = reporti[reportKey];

          sheetData = [
            ...sheetData,
            [reportKey],
            ['week', 'period', 'year', 'from', 'to', 'Store Name', ...(report.currentReport.report.map((entry) => entry.storeName) ?? [])],
            [
              report?.currentReport.week ?? '',
              report?.currentReport.period ?? '',
              report?.currentReport.year ?? '',
              report?.currentReport.from?.split('T')[0] ?? '',
              report?.currentReport.to?.split('T')[0] ?? '',
              'Total Sales',
              ...(report?.currentReport?.report.map((entry) => parseFloat(entry.mclanePurchase?.toFixed(2)) || 0) ?? []),
            ],
            [
              report.prevReport.week ?? '',
              report.prevReport.period ?? '',
              report.prevReport.year ?? '',
              report.prevReport.from?.split('T')[0] ?? '',
              report.prevReport.to?.split('T')[0] ?? '',
              'Total Sales',
              ...(report?.prevReport?.report.map((entry) => parseFloat(entry.mclanePurchase?.toFixed(2)) || 0) ?? []),
            ],
            [
              '--',
              '--',
              '--',
              '--',
              '--',
              'Variance($)',
              ...(report.variancedata.map((entry) => parseFloat(entry.totalSalesdiff?.toFixed(2)) || 0) ?? []),
            ],
            [
              '--',
              '--',
              '--',
              '--',
              '--',
              'Variance(%)',
              ...(report.variancedata.map((entry) => parseFloat(entry.variancePercentage?.toFixed(2)) || 0) ?? []),
            ],
          ];
        });
      });

      const ws = XLSX.utils.aoa_to_sheet(sheetData);

      XLSX.utils.book_append_sheet(wb, ws, 'SalesReport');

      XLSX.writeFile(wb, 'SalesReport.xlsx');
    }
  };
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} w="100%" bg={'white'} p="2">
      <HStack mb={2} gap={2}>
        {/* Add dynamic input fields for week, period, and year */}
        <Input type="number" placeholder="Week" value={week} onChange={(e) => setWeek(parseInt(e.target.value))} />
        <Input type="number" placeholder="Period" value={period} onChange={(e) => setPeriod(parseInt(e.target.value))} />
      </HStack>
      <HStack mb={2} gap={2}>
        <Input type="number" placeholder="Year" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
        <Button w={'full'} onClick={handleDownload} colorScheme='brand'>Download Excel</Button>

      </HStack>

      <Heading size='xl' mb={'2'}>Weekly Employee Productivity</Heading>
      {data && (
        Object.keys(data?.data)?.map((type) => {
          console.log({ type })
          return (<Box p={"4"}>
            <Heading size='lg'>{type}</Heading>
            {
              Object.keys(data.data[type]).map(type2 => {
                return (<Box p={"4"} key={type2} style={{ overflow: 'auto', width: "100%" }}>
                  <Heading size='md'>{type2}</Heading>
                  <Box>
                    <Table>
                      <Thead>
                        <Tr >
                          {['week', 'period', 'year', 'from', 'to', 'Store Name'].map((week, index) =>
                            <Th minW={"max-content"} key={index}>{week}</Th>)}
                          {data.data[type][type2].currentReport.report.map((entry) => (
                            <Th minW={"max-content"} key={entry.storeName}>{entry.storeName}</Th>
                          ))}
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          {
                            [data.data[type][type2].currentReport.week,
                            data.data[type][type2].currentReport.period,
                            data.data[type][type2].currentReport.year,
                            data.data[type][type2].currentReport.from?.split('T')[0],
                            data.data[type][type2].currentReport.to?.split('T')[0],
                            ].map((week, index) => <Td minW={"max-content"} key={index}>{week}</Td>)}

                          <Th minW={"max-content"}>Total Sales</Th>
                          {data.data[type][type2].currentReport.report.map((entry) => (
                            <Td minW={"max-content"} key={entry.storeName}>{parseFloat(entry.mclanePurchase?.toFixed(2)) || 0}</Td>
                          ))}
                        </Tr>
                        <Tr>
                          {
                            [data.data[type][type2].prevReport.week,
                            data.data[type][type2].prevReport.period,
                            data.data[type][type2].prevReport.year,
                            data.data[type][type2].prevReport.from?.split('T')[0],
                            data.data[type][type2].prevReport.to?.split('T')[0],
                            ].map((week, index) => <Td minW={"133px"} key={index}>{week}</Td>)}
                          <Th minW={"max-content"}>Prev Sale</Th>

                          {data.data[type][type2].prevReport.report.map((entry) => (
                            <Td minW={"max-content"} key={entry.storeName}>{parseFloat(entry.mclanePurchase?.toFixed(2)) || 0}</Td>
                          ))}
                        </Tr>
                        <Tr>
                          {
                            ['--',
                              '--',
                              '--',
                              '--',
                              '--',
                            ].map((week, index) => <Td key={index}>{week}</Td>)}

                          <Th minW={"max-content"}>Variance($)</Th>
                          {data.data[type][type2].variancedata.map((entry) => (
                            <Td minW={"max-content"} key={entry.storeName}>{parseFloat(entry.totalSalesdiff?.toFixed(2)) || 0}</Td>
                          ))}
                        </Tr>
                        <Tr>
                          {
                            ['--',
                              '--',
                              '--',
                              '--',
                              '--',
                            ].map((week, index) => <Td key={index}>{week}</Td>)}
                          <Th>Variance(%)</Th>
                          {data.data[type][type2].variancedata.map((entry) => (
                            <Td key={entry.storeName}>{parseFloat(entry.variancePercentage?.toFixed(2)) || 0}</Td>
                          ))}
                        </Tr>
                      </Tbody>
                    </Table>
                  </Box>
                </Box>)
              })
            }

          </Box>)
        })
      )}
    </Box>
  );
};

export default SalesReport;



