'use client';
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
    Text,

  } from "@chakra-ui/react";

import { useEffect ,useState } from 'react';
import RestaurantGroupReport from "./report/reasturantGroupReport";
import AreaSummeryReport from "./report/areaSummery";
import ManagerSales from "./report/managerSales";

export default function FlashReport() {
  const [receivedArray, setReceivedArray] = useState([]);

  // Function to receive the array from the child component
  const receiveArray = (array) => {
    // Do something with the received array
    console.log('Received array in parent:', array);
    setReceivedArray(array);
  };
   
    return (
      <div>
         <Box>
        {/* Add dynamic input fields for week, period, and year */}
      
    {/* <input type="number" placeholder="Period" value={period} onChange={(e) => setPeriod(parseInt(e.target.value))} />
        <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(parseInt(e.target.value))} /> */}
        <Button>Download Excel</Button>
      </Box>
        
        {/* //<DatePicker
    //   selected={selectedDate}
    //   onChange={handleDateChange}
      dateFormat="MM/dd/yyyy"
      isClearable
      placeholderText="Select date"
    /> */}
          <Button type='submit'>Submit</Button>
          <Button
            variant="outline"
            ml={100} // Adjust the margin as needed
            onClick={() => {
              // Handle download logic here
            }}
          >
            Download
          </Button>
        


      
      {/* <Center mt="sm"><Box bg="var(--mantine-color-blue-light)">  */}
      <Text fontSize='3xl'>Daily Flash Report</Text>
      {/* </Box>
      </Center> */}
      
      <>
      <RestaurantGroupReport />
      <AreaSummeryReport aggregatedData={receivedArray} />
      <ManagerSales manager="Fabiola Theodore" sendArrayToParent={receiveArray} />
      <ManagerSales manager="Hector Castillo" sendArrayToParent={receiveArray} /></>
     
     </div>
    );
  }
  