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
    HStack,
    Input,
    Text,

  } from "@chakra-ui/react";
import axios from 'axios'
import { useEffect ,useState } from 'react';
import RestaurantGroupReport from "./report/reasturantGroupReport";
import AreaSummeryReport from "./report/areaSummery";
import ManagerSales from "./report/managerSales";

export default function FlashReport() {
  const [receivedArray, setReceivedArray] = useState([]);
  const [date, setDate] = useState([]);
  const fetchData = async (download) => {
    try {
      const response = await axios.get(`https://portal-backend-mhgo.onrender.com/daily-report?client=tacobell&date=${date}&download=${download}`);
      const data = response.data;
      console.log('Received data:', data);
      if (download) {
        // If download=true and there is an excelUrl in the response, show an alert with the URL
        alert('Excel URL: ' + data?.data);
        // You can use other methods to inform the user, such as a modal or updating a component state for rendering
      } else {
        // If download=false or no excelUrl in the response, update state or handle the data accordingly
        console.log('Received data:', data);
        // Do something with the received data, for example, update state
      }
      // Do something with the received data, for example, update state
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // Function to receive the array from the child component
  const receiveArray = (array) => {
    // Do something with the received array
    console.log('Received array in parent:', array);
    setReceivedArray(array);
  };
  const handleSubmit = () => {
    // Call API with download=false
    fetchData(false);
  };

  const handleDownload = () => {
    // Call API with download=true
    fetchData(true);
  };
    return (
      <div>
         <Box pt={{ base: "130px", md: "80px", xl: "80px" }} w="100%">
       
         <HStack>
         <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
         <Button type='submit' onClick={handleSubmit}>Submit</Button>
          <Button
            variant="outline"
            ml={100} // Adjust the margin as needed
            onClick={
              handleDownload
            }
          >
            Download
          </Button>
      </HStack>
      
          
        
          </Box>

      
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
  