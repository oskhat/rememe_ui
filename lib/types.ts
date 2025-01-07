import { PublicKey } from "@solana/web3.js";
import { StakeEscrow, Unstake } from "@/lib/velib/types";
import { BN } from "@coral-xyz/anchor";

export interface Pool {
  tokenMint: PublicKey;
  vault: PublicKey;
  escrow: PublicKey;
  tokenVaultAccount: PublicKey;
  tokenMintDecimals: number;
  quoteVaultAccount: PublicKey;
  poolCreator: PublicKey;
  liquidTokenMint: PublicKey;
  liquidTokenVault: PublicKey;
  liquidSupply: BN;
  lut: PublicKey;
  protocolFeesToken: BN;
  protocolFeesTokenQuote: BN;
  recentEpoch: BN;
  bump: number;
  authBump: number;
  status: number;
  padding: number[];
}   

export interface UnstakeRequest {
  unstakeKey: PublicKey;
  unstakeRequest: PublicKey;
  unstake: Unstake;
}


