"use client";

import React, { FC, ReactNode, useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter, SolflareWalletAdapter, SafePalWalletAdapter, TrustWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import "dotenv/config";

require("@/api/styles.css");

const WalletContext = ({ children }: { children: ReactNode }) => {
  const endpoint = "https://mainnet.helius-rpc.com/?api-key=26a01b47-d973-45ea-a0ed-b174fd5b9866";

  const wallets = useMemo(() => [new SolflareWalletAdapter(), new SafePalWalletAdapter(), new TrustWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContext;
