import React from 'react'
import { Controller } from "react-hook-form";
import { TextField, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from 'luxon'

interface Props {
  control: any
  fieldName: string
  label: string
  index?: number
}

const DateInput = (props: Props) => {
  const { control, fieldName, label, index } = props

  return (
    <Controller
        control={control}
        name={fieldName}
        render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <DateTimePicker
                label={label}
                onChange={(date: DateTime | null) => {
                    if(index !== undefined){
                        if(field.value === undefined){
                            field.onChange([date])
                            return
                        }
                        if(field.value[index] === undefined){
                            field.onChange([...field.value, date])
                            return
                        }
                        const currentFieldValue = field.value
                        currentFieldValue[index] = date
                        field.onChange(currentFieldValue)
                        return
                    }
                    field.onChange(date)
                }}
                value={index !== undefined && field.value !== undefined ? field.value[index] : field.value}
                renderInput={(params) => <TextField {...params} sx={{width: '100%'}}/>}
                />
            </LocalizationProvider>
        )}
    />
  )
}

export default DateInput;