import React, { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Box, Stack, TextField } from '@mui/material';

interface Props {
  control: any
  register: any
  variableFeesCurrentValue: VariableFees[]
  setVariableFees: (variableFees: VariableFees[]) => void
}

interface VariableFees {
  transferFee: number
  earlyReleaseFee: number
  remainingTime: number
}

const VariableFees = (props: Props) => {
  const { control, register, variableFeesCurrentValue, setVariableFees } = props;
  const [possibleFees, setPossibleFees] = useState<Array<ReactNode>>([
    <Stack spacing={2} >
        <TextField 
          id="transferfee-numberinput"
          label="Transfer Fee 0"
          placeholder="%"
          {...register(`variableFees[0].transferFee`)}
        />
        <TextField 
          id="earlyreleasefee-numberinput"
          label="Early Release Fee 0"
          placeholder="%"
          {...register(`variableFees[0].earlyReleaseFee`)}
        />
        <TextField 
          id="timerelease-numberinput"
          label="Time to Release 0"
          placeholder="%"
          {...register(`variableFees[0].remainingTime`)}
        />
    </Stack> 
  ])

  useEffect(() => {
    if(variableFeesCurrentValue === undefined) return;
    const currentVariableFees = variableFeesCurrentValue.map((value, index) => {
      return <Stack spacing={2} >
      <TextField 
        id="transferfee-numberinput"
        label={`Transfer Fee ${index}`}
        placeholder="%"
        {...register(`variableFees[${index}].transferFee`)}
      />
      <TextField 
        id="earlyreleasefee-numberinput"
        label={`Early Release Fee ${index}`}
        placeholder="%"
        {...register(`variableFees[${index}].earlyReleaseFee`)}
      />
      <TextField 
        id="timerelease-numberinput"
        label={`Time to Release ${index}`}
        placeholder="%"
        {...register(`variableFees[${index}].remainingTime`)}
      />
  </Stack> 
    });
    setPossibleFees(currentVariableFees);
  }, [])
  
  return (
    <Box>
      <Stack spacing={2}>
        {possibleFees.map((possibleFees, index) => (
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
            {possibleFees}
          </Box>
        ))}
      </Stack>
      <Box sx={{alignItems: 'flex-end', marginTop: '8px'}}>
        <IndeterminateCheckBoxIcon onClick={() => {
          if(possibleFees.length === 1){
            return;
          }
          const currentPossibleFees = [...possibleFees];
          currentPossibleFees.pop();
          setPossibleFees(currentPossibleFees);

          const currentFees = variableFeesCurrentValue
          currentFees.pop()
          setVariableFees(currentFees)
        }}/>
        <AddBoxIcon onClick={() => {
          setPossibleFees([...possibleFees,
            <Stack spacing={2} >
              <TextField 
                id="transferfee-numberinput"
                label={`Transfer Fee ${possibleFees.length}`}
                placeholder="%"
                {...register(`variableFees[${possibleFees.length}].transferFee`)}
              />
              <TextField 
                id="earlyreleasefee-numberinput"
                label={`Early Release Fee ${possibleFees.length}`}
                placeholder="%"
                {...register(`variableFees[${possibleFees.length}].earlyReleaseFee`)}
              />
              <TextField 
                id="timerelease-numberinput"
                label={`Time to Release ${possibleFees.length}`}
                placeholder="%"
                {...register(`variableFees[${possibleFees.length}].remainingTime`)}
              />
            </Stack> 
          ]);
          console.log("possible", possibleFees)
          console.log("current", variableFeesCurrentValue)
        }}/>
      </Box>
    </Box>
  )
}

export default VariableFees;