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

     <Box>
     {/* First row */}
     <Grid templateColumns='repeat(2, 1fr)' gap={4}>
       <GridItem colSpan={1} >
         <SalesActualVsPreviousChart />
       </GridItem>
       <GridItem colSpan={1} >
         <SalesActualVsBudgeted />
       </GridItem>
     </Grid>

     {/* Second row */}
     <Grid templateColumns='repeat(2, 1fr)' gap={4}>
       <GridItem colSpan={1} >
         <SalesDistributionChart />
       </GridItem>
       <GridItem colSpan={1} >
         <SalesWiseChart />
       </GridItem>
     </Grid>

     {/* Third row */}
     <Grid templateColumns='repeat(2, 1fr)' gap={4}>
       <GridItem colSpan={1} >
         <CustomerComparisonChart />
       </GridItem>
       <GridItem colSpan={1} >
         <EmployeeProductivity />
       </GridItem>
     </Grid>
   </Box>
  );
}
