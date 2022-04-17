import React from 'react';
import { TextField, Stack } from '@mui/material';
import VariableFees from './VariableFees';

interface Props {
  register: any
  setValue: any
  control: any
  values: any
}

const Fees = (props: Props) => {
  const { register, control, values, setValue } = props

  const setVariableFees = (variableFees: VariableFees[]) => {
    setValue('variableFees', variableFees)
  }

  return (
    <Stack spacing={2} m={2}>
      <TextField 
        id="treasury-textinput"
        label="Treasury"
        placeholder="0x0000000000000000000000000000000000000000"
        {...register("treasury")}
      />
      <TextField 
        id="originationfee-textinput"
        label="Origination Fee"
        placeholder="%"
        {...register("originationfee")}
      />
      <VariableFees
        control={control}
        register={register}
        variableFeesCurrentValue={values.variableFees}
        setVariableFees={setVariableFees}
      />
    </Stack> 
  )
}

export default Fees;