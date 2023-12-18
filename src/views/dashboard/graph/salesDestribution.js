import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const SalesDistributionChart = (props) => {
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
        `${process.env.REACT_APP_FRONTEND}/dashboard/sales-distribution`
      );

      console.log('SalesDistributionChart', res.data);

      setChartState((prev) => ({
        ...prev,
        data: res.data.data,
        status: 'success',
      }));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      {chartState.status === 'pending' ? (
        <Text>Loading Chart data...</Text>
      ) : (
        <Doughnut
          style={{ width: '25%' }}
          data={{
            labels: chartState.data.map((ech) => ech.label),
            datasets: [
              {
                label: 'Sales Distribution',
                data: chartState.data.map((ech) => ech.data),
                borderRadius: 8,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Sales Distribution',
              },
              legend: {
                position: 'left',
              },
            },
            cutout: '70%',
          }}
        />
      )}
    </Box>
  );
};

export default SalesDistributionChart;
