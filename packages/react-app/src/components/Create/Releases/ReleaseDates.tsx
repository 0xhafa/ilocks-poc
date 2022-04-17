import React, { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Box, Stack, Typography } from '@mui/material';
import { DateTime } from 'luxon'

import DateInput from './DateInput'

interface Props {
  control: any
  releaseDatesCurrentValue: DateTime[]
  setReleaseDates: (releaseDate: DateTime[]) => void
}

const ReleaseDates = (props: Props) => {
  const { control, releaseDatesCurrentValue, setReleaseDates } = props;
  const [possibleReleaseDates, setPossibleReleaseDates] = useState<Array<ReactNode>>([
    <DateInput
    control={control}
    fieldName="releaseDate"
    label={`Release Date 0`}
    index={0}
    />
  ])

  useEffect(() => {
    if(releaseDatesCurrentValue === undefined) return;
    const currentDates = releaseDatesCurrentValue.map((value, index) => {
      return <DateInput
          control={control}
          fieldName="releaseDate"
          label={`Release Date ${index}`}
          index={index}
          key={index} 
        />
    })
    setPossibleReleaseDates(currentDates)
  }, [])
  
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
        Release Dates
      </Typography>
      <Stack spacing={2}>
        {possibleReleaseDates.map((possibleReleaseDate, index) => <Box sx={{width: '100%'}} key={index}>{possibleReleaseDate}</Box>)}
      </Stack>
      <Box sx={{alignItems: 'flex-end', marginTop: '8px'}}>
        <IndeterminateCheckBoxIcon onClick={() => {
          if(possibleReleaseDates.length === 1){
            return;
          }
          const currentPossibleReleaseDates = [...possibleReleaseDates];
          currentPossibleReleaseDates.pop();
          setPossibleReleaseDates(currentPossibleReleaseDates);

          const currentReleaseDatesValue = releaseDatesCurrentValue
          currentReleaseDatesValue.pop()
          setReleaseDates(currentReleaseDatesValue)
        }}/>
        <AddBoxIcon onClick={() => {
          setPossibleReleaseDates([...possibleReleaseDates,
            <DateInput
              control={control} 
              fieldName="releaseDate"
              label={`Release Date ${possibleReleaseDates.length}`}
              index={possibleReleaseDates.length}
              key={possibleReleaseDates.length}
            />
          ]);
        }}/>
      </Box>
    </Box>
  )
}

export default ReleaseDates;