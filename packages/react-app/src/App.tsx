import React, { useEffect, useState } from "react";
import { useCall } from "@usedapp/core";
import { addresses, abis } from "@my-app/contracts";
import GET_TRANSFERS from "./graphql/subgraph";
import { Contract } from "@ethersproject/contracts";
import { useQuery } from "@apollo/client";

import { Body, Container, Header } from "./components";
import WalletButton from "./components/WalletButton";
import Create from "./components/Create/Create";

function App() {
  const [page, _] = useState("create");

  const { error: contractCallError, value: tokenBalance } =
    useCall({
       contract: new Contract(addresses.ceaErc20, abis.erc20),
       method: "balanceOf",
       args: ["0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C"],
    }) ?? {};

  const { loading, error: subgraphQueryError, data } = useQuery(GET_TRANSFERS);

  useEffect(() => {
    if (subgraphQueryError) {
      console.error("Error while querying subgraph:", subgraphQueryError.message);
      return;
    }
    if (!loading && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, subgraphQueryError, data]);

  const getCurrentPage = (currentPage:string) => {
    if (currentPage === "create") {
      return <Create />;
    }

    return <></>;
  }

  return (
    <Container>
      <Header>
        <WalletButton />
      </Header>
      <Body>
        {getCurrentPage(page)}
      </Body>
    </Container>
  );
}

export default App;
