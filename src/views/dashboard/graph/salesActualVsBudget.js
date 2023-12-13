import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const SalesActualVsBudgeted = (props) => {
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
        'https://portal-backend-7zbi.onrender.com/dashboard/sales-actual-vs-sales-budgeted'
      );

      console.log('SalesActualVsBudgeted', res.data);

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
  }, []);

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }} w="120%">
      {chartState.status === 'pending' ? (
        <Text>Loading ...</Text>
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
                text: 'Sales actual vs Sales Budgeted',
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default SalesActualVsBudgeted;
