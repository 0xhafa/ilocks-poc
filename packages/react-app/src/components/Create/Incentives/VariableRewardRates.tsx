import React, { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Box, Stack, TextField } from '@mui/material';

interface Props {
  control: any
  register: any
  variableRewardRateCurrentValue: VariableRate[]
  setVariableRewardRates: (variableRate: VariableRate[]) => void
}

interface VariableRate {
  final: number
  duration: number
}

const VariableRewardRates = (props: Props) => {
  const { control, register, variableRewardRateCurrentValue, setVariableRewardRates } = props;
  const [possibleRewardRates, setPossibleRewardRates] = useState<Array<ReactNode>>([
    <Stack spacing={2} >
        <TextField 
          id="final-numberinput"
          label="Final 0"
          placeholder="Reward Token / Locked Token"
          {...register(`variableRewardRates[0].final`)}
        />
        <TextField 
          id="duration-numberinput"
          label="Duration 0"
          placeholder="days"
          {...register(`variableRewardRates[0].duration`)}
        />
    </Stack> 
  ])

  useEffect(() => {
    if(variableRewardRateCurrentValue === undefined) return;
    const currentVariableRewards = variableRewardRateCurrentValue.map((value, index) => {
      return <Stack spacing={2} >
        <TextField 
          id="final-numberinput"
          label={`Final ${index}`}
          placeholder="Reward Token / Locked Token"
          {...register(`variableRewardRates[${index}].final`)}
        />
        <TextField 
          id="duration-numberinput"
          label={`Duration ${index}`}
          placeholder="days"
          {...register(`variableRewardRates[${index}].duration`)}
        />
      </Stack> 
    });
    setPossibleRewardRates(currentVariableRewards);
  }, [])
  
  return (
    <Box>
      <Stack spacing={2}>
        {possibleRewardRates.map((possibleRewardRate, index) => (
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
            key={index}
          >
            {possibleRewardRate}
          </Box>
        ))}
      </Stack>
      <Box sx={{alignItems: 'flex-end', marginTop: '8px'}}>
        <IndeterminateCheckBoxIcon onClick={() => {
          if(possibleRewardRates.length === 1){
            return;
          }
          const currentPossibleRewardRate = [...possibleRewardRates];
          currentPossibleRewardRate.pop();
          setPossibleRewardRates(currentPossibleRewardRate);

          const currentRewardRateValue = variableRewardRateCurrentValue
          currentRewardRateValue.pop()
          setVariableRewardRates(currentRewardRateValue)
        }}/>
        <AddBoxIcon onClick={() => {
          setPossibleRewardRates([...possibleRewardRates,
            <Stack spacing={2} >
              <TextField 
                id="final-numberinput"
                label={`Final ${possibleRewardRates.length}`}
                placeholder="Reward Token / Locked Token"
                {...register(`variableRewardRates[${possibleRewardRates.length}].final`)}
              />
              <TextField 
                id="duration-numberinput"
                label={`Duration ${possibleRewardRates.length}`}
                placeholder="days"
                {...register(`variableRewardRates[${possibleRewardRates.length}].duration`)}
              />
            </Stack> 
          ]);
          console.log("possible", possibleRewardRates)
          console.log("current", variableRewardRateCurrentValue)
        }}/>
      </Box>
    </Box>
  )
}

export default VariableRewardRates;