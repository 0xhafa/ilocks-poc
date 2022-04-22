import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { set } from 'react-hook-form';

interface Props {
  setCurrentPage: any;
}

export default function Nav(props: Props) {
  const { setCurrentPage } = props;
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs 
        value={value} onChange={handleChange} 
        textColor='inherit'
      >
        <Tab sx={{ width: '33%'}}  label="Create" onClick={() => setCurrentPage("create")} />
        <Tab sx={{ width: '33%'}}  label="Manage" onClick={() => setCurrentPage("manage")} />
        <Tab sx={{ width: '33%'}}  label="Locks" onClick={() => setCurrentPage("locks")}  />
      </Tabs>
    </Box>
  );
}