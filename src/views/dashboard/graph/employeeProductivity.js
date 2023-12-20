import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const EmployeeProductivity = ({ week, period, year }) => {
  const [chartState, setChartState] = useState({
    data: [],
    status: null,
  });

  const fetchChartData = async () => {
    try {
      setChartState((prev) => ({
        ...prev,
        status: 'pending',
      }));
      const res = await axios.get(
        `${process.env.REACT_APP_FRONTEND}/dashboard/employee-productivity?week=${week}&period=${period}&year=${year}`
      );

      setChartState((prev) => ({
        ...prev,
        data: res.data.data,
        status: 'success',
      }));
    } catch (error) {
      setChartState((prev) => ({
        ...prev,
        status: 'failed',
      }));
      alert(error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, [week, period, year]);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      {chartState.status === 'pending' ? (
        <Text>Loading Chart data...</Text>
      ) : (
        <Bar
          data={{
            labels: chartState.data.map((ech) => ech.label),
            datasets: [
              {
                label: 'Sales actual',
                data: chartState.data.map((ech) => ech.currentYear),
              },
              {
                label: 'Sales previous',
                data: chartState.data.map((ech) => ech.previousYear),
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Employee productivity',
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default EmployeeProductivity;
