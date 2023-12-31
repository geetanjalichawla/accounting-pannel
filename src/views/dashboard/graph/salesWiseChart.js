import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const SalesWiseChart = ({ week, period, year }) => {
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
        `${process.env.REACT_APP_FRONTEND}/dashboard/store-wise-sales?week=${week}&period=${period}&year=${year}`
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
                label: 'Sales',
                data: chartState.data.map((ech) => ech.data),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Store wise sales',
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default SalesWiseChart;
