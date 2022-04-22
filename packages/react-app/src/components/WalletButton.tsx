import React, { useState, useEffect } from "react";

import { Button } from ".";

import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";

interface Props {
  rendered: string;
  setRendered: any;
}

function WalletButton(props: Props) {
  
    const ens = useLookupAddress();
    const { account, activateBrowserWallet, deactivate, error } = useEthers();
  
    useEffect(() => {
      if (ens) {
        props.setRendered(ens);
      } else if (account) {
        props.setRendered(shortenAddress(account));
      } else {
        props.setRendered("");
      }
    }, [account, ens, props.setRendered]);
  
    useEffect(() => {
      if (error) {
        console.error("Error while connecting wallet:", error.message);
      }
    }, [error]);
  
    return (
      <Button
        onClick={() => {
          if (!account) {
            activateBrowserWallet();
          } else {
            deactivate();
          }
        }}
        style={{alignSelf: 'right', marginRight: '50px'}}
      >
        {props.rendered === "" && "Connect Wallet"}
        {props.rendered !== "" && props.rendered}
      </Button>
    );
  }

export default WalletButton;