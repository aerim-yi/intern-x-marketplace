import { Link, ImmutableXClient } from '@imtbl/imx-sdk';
import { useState } from 'react';
import DepositFunction from "./DepositFunction";
import WithdrawETHFunction from "./WithdrawETHFunction";
import WithdrawNFTFunction from './WithdrawNFTFunction';


const WalletFeatures = () => {
  const [wallet, setWallet] = useState('undefined');
  const link = new Link('https://link.ropsten.x.immutable.com')
  const [client, setClient] = useState<ImmutableXClient>(Object);
  return (
    <nav>
      <div>
        <DepositFunction />
      </div>
      <br></br>
      <div>
        <WithdrawETHFunction  
          client={client}
          link={link}
          wallet={wallet}/>
      </div>
      <div>
        <WithdrawNFTFunction  
          client={client}
          link={link}
          wallet={wallet}/>
      </div>
    </nav>
  );
};

export default WalletFeatures;
