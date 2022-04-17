import React from 'react';
import { TextField, Stack, Box, Typography, FormControlLabel, Checkbox } from '@mui/material';

interface Props {
  register: any
  setValue: any
  control: any
  values: any
}


const Vesting = (props: Props) => {
  const { register, control, values, setValue } = props

  return (
    <Box 
      sx={{
        border: 2,
        borderColor: '#e0e0e0',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        p: 1,
        m: 0,
        borderRadius: 2
      }}
    >
      <Typography mb={2}>
        Vesting
      </Typography>
      <Stack spacing={2} >
        <TextField 
          id="waitperiod-numberinput"
          label="Wait Period"
          placeholder="days"
          {...register("cliff")}
        />
        <TextField 
          id="duration-numberinput"
          label="Vesting Duration"
          placeholder="days"
          {...register("vestingduration")}
        />
        <FormControlLabel 
          control={<Checkbox />} 
          label="Vesting duration equal to lock duration" 
          {...register("vestingequallockduration")}
        />
        <TextField 
          id="slice-numberinput"
          label="Time Between Increases"
          placeholder="days"
          {...register("slice")}
        />
      </Stack> 
    </Box>
  )
}

export default Vesting;