import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { set } from 'react-hook-form';

interface Props {
  setCurrentPage: any;
}

export default function NavTabs(props: Props) {
  const { setCurrentPage } = props;
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Box>
      <Tabs 
        value={value} onChange={handleChange} 
        aria-label="nav tabs example"
      >
        <Tab sx={{ width: '33%'}}  label="Releases" onClick={() => setCurrentPage("releases")} />
        <Tab sx={{ width: '33%'}}  label="Incentives" onClick={() => setCurrentPage("incentives")} />
        <Tab sx={{ width: '33%'}}  label="Fees" onClick={() => setCurrentPage("fees")}  />
      </Tabs>
    </Box>
  );
}