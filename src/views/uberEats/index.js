"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import moment from 'moment';
import { Box, Button, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const SalesReport = () => {
  const [data, setData] = useState(null);
  const [week, setWeek] = useState(47);
  const [period, setPeriod] = useState(12);
  const [year, setYear] = useState(2023);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_FRONTEND}/weekly-report/weekly-uberEats?week=${week}&period=${period}&year=${year}`);
        const apiData = response.data;
        setData(apiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [week,period,year]);

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
              moment(report?.currentReport.from).format('YYYY-MM-DD') ?? '',
              moment(report?.currentReport.to).format('YYYY-MM-DD') ?? '',
              'Total Sales',
              ...(report?.currentReport?.report.map((entry) => entry.totalSales) ?? []),
            ],
            [
              report.prevReport.week ?? '',
              report.prevReport.period ?? '',
              report.prevReport.year ?? '',
              moment(report.prevReport.from).format('YYYY-MM-DD') ?? '',
              moment(report.prevReport.to).format('YYYY-MM-DD') ?? '',
              'Total Sales',
              ...(report?.prevReport?.report.map((entry) => entry.totalSales) ?? []),
            ],
            [
              '--',
              '--',
              '--',
              '--',
              '--',
              'Variance($)',
              ...(report.variancedata.map((entry) => entry.totalSalesdiff) ?? []),
            ],
            [
              '--',
              '--',
              '--',
              '--',
              '--',
              'Variance(%)',
              ...(report.variancedata.map((entry) => entry.variancePercentage) ?? []),
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
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} w="100%" bg={'white'}>
        <Box>
        {/* Add dynamic input fields for week, period, and year */}
        <input type="number" placeholder="Week" value={week} onChange={(e) => setWeek(parseInt(e.target.value))} />
        <input type="number" placeholder="Period" value={period} onChange={(e) => setPeriod(parseInt(e.target.value))} />
        <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
        <Button onClick={handleDownload}>Download Excel</Button>
      </Box>
      <Heading size='xl' mb={'2'}>Weekly uberEats Report</Heading>
      {data && (
        Object.keys(data?.data)?.map((type) => {
          console.log({ type })
          return (<Box p={"4"}>
            <Heading size='lg'>{type}</Heading>
          {
            Object.keys(data.data[type]).map(type2=>{
              return (<Box p={"4"} key={type2} style={{overflow: 'auto', width:"100%"}}>
              <Heading size='md'>{type2}</Heading>
<Box>
<Table>
                <Thead>
                  <Tr >
                    {['week', 'period', 'year', 'from', 'to', 'Store Name'].map((week,index) => 
                    <Th  key={index}>{week}</Th>)}
                    <Th >Store Name</Th>
  
                    {data.data[type][type2].currentReport.report.map((entry) => (
                      <Th  key={entry.storeName}>{entry.storeName}</Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    {
                      [data.data[type][type2].currentReport.week,
                      data.data[type][type2].currentReport.period,
                      data.data[type][type2].currentReport.year,
                      moment(data.data[type][type2].currentReport.from).format('YYYY-MM-DD'),
                      moment(data.data[type][type2].currentReport.to).format('YYYY-MM-DD'),
              ].map((week, index) => <Td key={index}>{week}</Td>)}
  
                    <Th>Total Sales</Th>
                    {data.data[type][type2].currentReport.report.map((entry) => (
                      <Td key={entry.storeName}>{entry.totalSales}</Td>
                    ))}
                  </Tr>
                  <Tr>
                    {
                      [data.data[type][type2].prevReport.week,
                      data.data[type][type2].prevReport.period,
                      data.data[type][type2].prevReport.year,
                      moment(data.data[type][type2].prevReport.from).format('YYYY-MM-DD'),
                      moment(data.data[type][type2].prevReport.to).format('YYYY-MM-DD'),
                                          ].map((week, index) => <Td key={index}>{week}</Td>)}
                    <Th>Prev Sale</Th>
  
                    {data.data[type][type2].prevReport.report.map((entry) => (
                      <Td key={entry.storeName}>{entry.totalSales}</Td>
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
  
                    <Th>Variance($)</Th>
                    {data.data[type][type2].variancedata.map((entry) => (
                      <Td key={entry.storeName}>{entry.totalSalesdiff}</Td>
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
                      <Td key={entry.storeName}>{entry.variancePercentage}</Td>
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
