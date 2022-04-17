import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, TextField } from '@mui/material';

import VariableRewardRates from './VariableRewardRates'

interface Props {
  register: any
  setValue: any
  control: any
  values: any
}

interface VariableRate {
  final: number
  duration: number
}

const RewardRate = (props: Props) => {
  const { register, control, values, setValue } = props

  const setVariableRewardRates = (variableRewardRates: VariableRate[]) => {
    setValue('variableRewardRates', variableRewardRates)
  }

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
        Reward Rate
      </Typography>
      <Stack spacing={2}>
        <TextField 
          id="initial-numberinput"
          label="Initial"
          placeholder="Reward Token / Locked Token"
          {...register("initialRewardRate")}
        />
        <VariableRewardRates
          control={control}
          register={register}
          variableRewardRateCurrentValue={values.variableRewardRates}
          setVariableRewardRates={setVariableRewardRates}
        />
      </Stack>
    </Box>
  )
}

export default RewardRate;