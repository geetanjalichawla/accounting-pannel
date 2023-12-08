"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import moment from 'moment';
import { Box, Button, Table } from '@chakra-ui/react';

const SalesReport = () => {
  const [data, setData] = useState(null);
  const [week, setWeek] = useState(47);
  const [period, setPeriod] = useState(12);
  const [year, setYear] = useState(2023);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://portal-backend-mhgo.onrender.com/weekly-report/weekly-sales?week=${week}&period=${period}&year=${year}`);
        const apiData = response.data;
        setData(apiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    if (data) {
      const wb = XLSX.utils.book_new();
      let sheetData = [];
      // Loop through each report and add it to the Excel workbook
      Object.keys(data.data).forEach((reportKey) => {
        const report = data.data[reportKey];
        // "week": 46,
        // "period": 12,
        // "year": 2023,
        // "from": "2023-11-07T18:30:00.000Z",
        // "to": "2023-11-13T18:30:00.000Z"
        sheetData = [
          ...sheetData,
          [reportKey],
          ['week', 'period', 'year', 'from', 'to', 'Store Name', ...report.currentReport.report.map((entry) => entry.storeName)],
          [report.currentReport.week,
          report.currentReport.period,
          report.currentReport.year,
          moment(report.currentReport.from).format('YYYY-MM-DD'),
          moment(report.currentReport.to).format('YYYY-MM-DD'),
            'Total Sales', ...report.currentReport.report.map((entry) => entry.totalSales)],
          [report.prevReport.week,
          report.prevReport.period,
          report.prevReport.year,
          moment(report.prevReport.from).format('YYYY-MM-DD'),
          moment(report.prevReport.to).format('YYYY-MM-DD'),
             'Total Sales', ...report.prevReport.report.map((entry) => entry.totalSales)],

          [

            ...['--',
              '--',
              '--',
              '--',
              '--',
            ],
            'Variance($)', ...report.variancedata.map((entry) => entry.totalSalesdiff)],
          [
            ...['--',
              '--',
              '--',
              '--',
              '--',
            ],
            'Variance(%)', ...report.variancedata.map((entry) => entry.variancePercentage)],
        ]

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
      <h2>Sales Report</h2>
      {data && (
        Object.keys(data?.data)?.map((type) => {
          console.log({ type })
          return (<div key={type} style={{overflow: 'auto', width:"100%"}}>
            <h2>{type}</h2>
            <Table>
              <thead>
                <tr >
                  {['week', 'period', 'year', 'from', 'to', 'Store Name'].map((week,index) => 
                  <th  key={index}>{week}</th>)}
                  <th >Store Name</th>

                  {data.data[type].currentReport.report.map((entry) => (
                    <th  key={entry.storeName}>{entry.storeName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {
                    [data.data[type].currentReport.week,
                    data.data[type].currentReport.period,
                    data.data[type].currentReport.year,
                    moment(data.data[type].currentReport.from).format('YYYY-MM-DD'),
                    moment(data.data[type].currentReport.to).format('YYYY-MM-DD'),
            ].map((week, index) => <td key={index}>{week}</td>)}

                  <th>Total Sales</th>
                  {data.data[type].currentReport.report.map((entry) => (
                    <td key={entry.storeName}>{entry.totalSales}</td>
                  ))}
                </tr>
                <tr>
                  {
                    [data.data[type].prevReport.week,
                    data.data[type].prevReport.period,
                    data.data[type].prevReport.year,
                    moment(data.data[type].prevReport.from).format('YYYY-MM-DD'),
                    moment(data.data[type].prevReport.to).format('YYYY-MM-DD'),
                                        ].map((week, index) => <td key={index}>{week}</td>)}
                  <th>Prev Sale</th>

                  {data.data[type].prevReport.report.map((entry) => (
                    <td key={entry.storeName}>{entry.totalSales}</td>
                  ))}
                </tr>
                <tr>
                  {
                    ['--',
                      '--',
                      '--',
                      '--',
                      '--',
                    ].map((week, index) => <td key={index}>{week}</td>)}

                  <th>Variance($)</th>
                  {data.data[type].variancedata.map((entry) => (
                    <td key={entry.storeName}>{entry.totalSalesdiff}</td>
                  ))}
                </tr>
                <tr>
                  {
                    ['--',
                      '--',
                      '--',
                      '--',
                      '--',
                    ].map((week, index) => <td key={index}>{week}</td>)}
                  <th>Variance(%)</th>
                  {data.data[type].variancedata.map((entry) => (
                    <td key={entry.storeName}>{entry.variancePercentage}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </div>
          )
        })
      )}
      <button onClick={handleDownload}>Download Excel</button>
    </Box>
  );
};

export default SalesReport;
