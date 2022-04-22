import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Container, Box, Button, Grid } from '@mui/material';
import { ethers } from 'ethers';
import { useContractFunction } from '@usedapp/core';
import { addresses, abis } from "@my-app/contracts";
import Releases from './Releases/Releases';
import Fees from './Fees/Fees';
import Incentives from './Incentives/Incentives';
import NavTabs from './Nav/NavTabs';

const INFURA_URL = "https://rinkeby.infura.io/v3/28f50addc004418c9416ec3d48dea5bb";

interface Fees {
  originationFee: any,
  variableFees: any[],
} 

const Create = () => {
  const [currentPage, setCurrentPage] = useState("releases");
  const { register, handleSubmit, setValue, getValues, control } = useForm();

  const contractAddress = addresses.lockDiamond;
  const contractInterface = new ethers.utils.Interface(abis.lockManager);
  const contract = new ethers.Contract(contractAddress, contractInterface);

  const { state, send } = useContractFunction(contract, "createLockSchedule");
  
  const createLock = (data: any) => {
    let tl = data.lockedToken? data.lockedToken : undefined;
    let tr = data.treasury? data.treasury : undefined;
    let sd = data.startingDate? data.startingDate.ts : undefined;
    let ld = data.releaseDate? data.releaseDate.map((result: any) => result.ts) : undefined;
    let uri = data.baseUri? data.baseUri : undefined;
    let or = data.originationfee? data.originationfee : undefined;
    let vf = data.variableFees? data.variableFees : undefined;
    let fee = [or, vf];
    let rw:any[] = []

    send(
      tl, 
      tr,
      sd,
      ld,
      uri,
      fee,
      rw
    )
  }

  const onSubmit = (data: any) => {
    createLock(data);
  }
  
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