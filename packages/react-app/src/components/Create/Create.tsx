import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Container } from '@mui/material';

import Releases from './Releases/Releases';

const Create = () => {
  const [currentPage, setCurrentPage] = useState("releases");
  const { register, handleSubmit, setValue, getValues, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const getCurrentPage = (currentPage: string) => {
    if (currentPage === "releases") {
      return <Releases register={register} setValue={setValue} control={control} values={getValues()}/>;
    }
  
    return <></>;
  }

  console.log(getValues())
    return (
        <Container maxWidth="lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            {getCurrentPage(currentPage)}
          </form>
        </Container>
    )
}

export default Create