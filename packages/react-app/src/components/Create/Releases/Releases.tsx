import React from 'react';
import { TextField, Stack } from '@mui/material';
import DateInput from '../DateInput';
import ReleaseDates from './ReleaseDates';
import { DateTime } from 'luxon'

interface Props {
  register: any
  setValue: any
  control: any
  values: any
}

const Releases = (props: Props) => {
  const { register, control, values, setValue } = props

  const setReleaseDates = (releaseDates: DateTime[]) => {
    setValue('releaseDate', releaseDates)
  }

  return (
      <Stack spacing={2}>
        <TextField 
          id="lockedtoken-textinput"
          label="Locked token"
          placeholder="0x0000000000000000000000000000000000000000"
          {...register("lockedToken")}
        />
        <TextField 
          id="baseUri-textinput"
          label="Base URI"
          placeholder="URI"
          {...register("baseUri")}
        />
        <DateInput 
          control={control} 
          fieldName="startingDate" 
          label="Starting Date"
        />
        <ReleaseDates
          control={control}
          releaseDatesCurrentValue={values['releaseDate']}
          setReleaseDates={setReleaseDates}
        />
      </Stack> 
  )
}

export default Releases;