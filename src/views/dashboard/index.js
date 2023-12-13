import { Box, Grid, Text,GridItem } from '@chakra-ui/react';
import 'chart.js/auto';
import SalesActualVsPreviousChart from './graph/salesActualVsPrv';
import SalesActualVsBudgeted from './graph/salesActualVsBudget';
import SalesDistributionChart from './graph/salesDestribution';


export default function Dashboard() {


  return (

   
       <Grid templateColumns='repeat(4, 1fr)' gap={4}>
  <GridItem w='100%' h='10' bg='blue.500'><SalesActualVsPreviousChart /></GridItem>
  {/* <GridItem w='100%' h='10' bg='blue.500'><SalesActualVsBudgeted /></GridItem>
  <GridItem w='100%' h='10' bg='blue.500'><SalesActualVsPreviousChart /></GridItem>
  <GridItem w='100%' h='10' bg='blue.500'><SalesDistributionChart /></GridItem> */}

       </Grid>
     
   
   
    
  );
}
