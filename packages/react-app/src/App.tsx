import React, { useEffect, useState } from "react";
import { useCall } from "@usedapp/core";
import { addresses, abis } from "@my-app/contracts";
import GET_TRANSFERS from "./graphql/subgraph";
import { Contract } from "@ethersproject/contracts";
import { useQuery } from "@apollo/client";

import { Body, Container, Header } from "./components";
import WalletButton from "./components/WalletButton";
import Create from "./components/Create/Create";
import Nav from "./components/Nav/Nav";
import logo from "./ILOCKS-alpha-logo.png";
import { fontFamily, fontSize } from "@mui/system";

function App() {
  const [page, setPage] = useState("create");
  const [rendered, setRendered] = useState("");

  const getCurrentPage = (currentPage:string) => {
    if(rendered === "") return <div style={{fontSize:'36px', fontFamily:'revert'}}>Connect Wallet</div>
    if (currentPage === "create") {
      return <Create />;
    }
    if (currentPage === "manage") {
      return <></>;
    }
    if (currentPage === "locks") {
      return <></>;
    }
    return <></>;
  }

  return (
    <Container>
      <Header >
        <img src={logo} style={{width:180, height:'auto', marginLeft:'50px'}} />
        <Nav setCurrentPage={setPage}/>
        <WalletButton rendered={rendered} setRendered={setRendered}/>
      </Header>
      <Body>
        {getCurrentPage(page)}
      </Body>
    </Container>
  );
}

export default App;
