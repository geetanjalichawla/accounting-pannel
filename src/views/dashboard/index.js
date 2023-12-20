import { Box, Grid, Text,GridItem,HStack,Input} from '@chakra-ui/react';
import 'chart.js/auto';
import SalesActualVsPreviousChart from './graph/salesActualVsPrv';
import SalesActualVsBudgeted from './graph/salesActualVsBudget';
import SalesDistributionChart from './graph/salesDestribution';
import SalesWiseChart from './graph/salesWiseChart';
import CustomerComparisonChart from './graph/customerCompare';
import EmployeeProductivity from './graph/employeeProductivity';
import { useEffect,useState } from 'react';

export default function Dashboard() {
  const [week, setWeek] = useState(47);
  const [period, setPeriod] = useState(12);
  const [year, setYear] = useState(2023);

  return (

     <Box>
     <HStack mb={2} gap={3}>
        {/* Add dynamic input fields for week, period, and year */}
        <Input type="number" placeholder="Week" value={week} onChange={(e) => setWeek(parseInt(e.target.value))} />
        <Input type="number" placeholder="Period" value={period} onChange={(e) => setPeriod(parseInt(e.target.value))} />
        <Input type="number" placeholder="Year" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
      </HStack>
    
     <Grid templateColumns='repeat(2, 1fr)' gap={4}>
       <GridItem colSpan={1} >
         <SalesActualVsPreviousChart week={week} period={period} year={year}/>
       </GridItem>
       <GridItem colSpan={1} >
         <SalesActualVsBudgeted week={week} period={period} year={year}/>
       </GridItem>
     </Grid>

     {/* Second row */}
     <Grid templateColumns='repeat(2, 1fr)' gap={4}>
       <GridItem colSpan={1} >
         <SalesDistributionChart week={week} period={period} year={year}/>
       </GridItem>
       <GridItem colSpan={1} >
         <SalesWiseChart week={week} period={period} year={year}/>
       </GridItem>
     </Grid>

     {/* Third row */}
     <Grid templateColumns='repeat(2, 1fr)' gap={4}>
       <GridItem colSpan={1} >
         <CustomerComparisonChart week={week} period={period} year={year}/>
       </GridItem>
       <GridItem colSpan={1} >
         <EmployeeProductivity week={week} period={period} year={year}/>
       </GridItem>
     </Grid>
   </Box>
  );
}
