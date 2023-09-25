import "@ethersproject/shims"
import {ethers } from "ethers"
export class EtherService {

  async createWalletAndKey() {
    const wallet = await ethers.Wallet.createRandom()
    return {
      address: await wallet.address,
      mnemonic: wallet.mnemonic.phrase,
      privateKey: await wallet.privateKey
    }
  }

}
