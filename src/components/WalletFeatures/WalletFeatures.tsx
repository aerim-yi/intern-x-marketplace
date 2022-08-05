// import "./WalletFeatures.css"
import { Link, ImmutableXClient, ImmutableMethodResults, ERC721TokenType, ETHTokenType, ImmutableRollupStatus  } from '@imtbl/imx-sdk';
import { useEffect, useState } from 'react';
import DepositFunction from "./DepositFunction";
import WithdrawFunction from "./WithdrawFunction";
// import BalanceFunction from "./BalanceFunction";

const WalletFeatures = () => {
  const [wallet, setWallet] = useState('undefined');
  const link = new Link('https://link.ropsten.x.immutable.com')
  const [client, setClient] = useState<ImmutableXClient>(Object);
  return (
    <nav className="WalletFeatures-container">
      <div>
        <DepositFunction />
      </div>
      <br></br>
      <div>
        <WithdrawFunction  
          client={client}
          link={link}
          wallet={wallet}/>
      </div>
    </nav>
  );
};

export default WalletFeatures;
