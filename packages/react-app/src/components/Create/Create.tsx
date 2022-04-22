import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Container, Box, Button, Grid } from '@mui/material';

import Releases from './Releases/Releases';
import Fees from './Fees/Fees';
import Incentives from './Incentives/Incentives';
import NavTabs from './Nav/NavTabs';

const Create = () => {
  const [currentPage, setCurrentPage] = useState("releases");
  const { register, handleSubmit, setValue, getValues, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const getCurrentPage = (currentPage: string) => {
    if (currentPage === "releases") {
      return <Releases register={register} setValue={setValue} control={control} values={getValues()}/>;
    }
    if (currentPage === "incentives") {
      return <Incentives register={register} setValue={setValue} control={control} values={getValues()}/>;
    }
    if (currentPage === "fees") {
      return <Fees register={register} setValue={setValue} control={control} values={getValues()}/>;
    }
    return <></>;
  }

    return (
        <Container maxWidth="md">
          <Box>
            <NavTabs setCurrentPage={setCurrentPage}/>
          </Box>
          <Box textAlign="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              { getCurrentPage(currentPage) }
              <Button type="submit" variant="contained" size="large" style={{marginTop:'20px'}} >Create Lock</Button>
            </form>
          </Box>
        </Container>
    )
}

export default Create