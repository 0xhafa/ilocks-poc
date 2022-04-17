import React from 'react';
import { TextField, Stack, FormControlLabel, Checkbox } from '@mui/material';
import RewardRate from './RewardRate';
import Vesting from './Vesting';

interface Props {
  register: any
  setValue: any
  control: any
  values: any
}


const Incentives = (props: Props) => {
  const { register, control, values, setValue } = props

  return (
      <Stack spacing={2} m={2}>
        <TextField 
          id="rewardtoken-textinput"
          label="Reward Token"
          placeholder="0x0000000000000000000000000000000000000000"
          {...register("rewardToken")}
        />
        <FormControlLabel 
          control={<Checkbox />} 
          label="Revocable" 
          {...register("revocable")}
        />
        <RewardRate 
          register={register} 
          setValue={setValue} 
          control={control} 
          values={values}
        />
        <Vesting 
          register={register} 
          setValue={setValue} 
          control={control} 
          values={values}
        />
      </Stack> 
  )
}

export default Incentives;