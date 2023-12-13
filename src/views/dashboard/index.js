import { Box, Grid, Text,GridItem } from '@chakra-ui/react';
import 'chart.js/auto';
import SalesActualVsPreviousChart from './graph/salesActualVsPrv';
import SalesActualVsBudgeted from './graph/salesActualVsBudget';
import SalesDistributionChart from './graph/salesDestribution';
import SalesWiseChart from './graph/salesWiseChart';
import CustomerComparisonChart from './graph/customerCompare';
import EmployeeProductivity from './graph/employeeProductivity';


export default function Dashboard() {


  return (

   <div>
       <Grid templateColumns='repeat(2, 1fr)' gap={2}>
  <GridItem w='100%' h='10' bg='blue.500'><SalesActualVsPreviousChart /></GridItem>
  {/* <GridItem w='100%' h='10' bg='blue.500'><SalesActualVsBudgeted /></GridItem> */}
       </Grid>
     
     {/* <Grid templateColumns='repeat(2, 1fr)' gap={4}>
  <GridItem w='100%' h='10' bg='blue.500'><SalesDistributionChart /></GridItem>
  <GridItem w='100%' h='10' bg='blue.500'><SalesWiseChart /></GridItem>
       </Grid>
       <Grid templateColumns='repeat(2, 1fr)' gap={4}>
  <GridItem w='100%' h='10' bg='blue.500'><CustomerComparisonChart /></GridItem>
  <GridItem w='100%' h='10' bg='blue.500'><EmployeeProductivity /></GridItem>
       </Grid> */}
   </div> 
  );
}
