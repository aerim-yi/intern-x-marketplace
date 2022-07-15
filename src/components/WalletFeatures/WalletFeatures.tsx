/* ### Plan

Aiming for location of Deposit Withdra to look like :
___________________________________________________
    Intern X Marketplace 

Marketplace      Connect to Wallet      Assets

                Wallet Address...
                Network ...

    Deposit                         Wtihdraw
    (Button)                        (Button)

    _____       _____       _____       _____    
   |     |     |     |     |     |     |     |  
   |     |     |     |     |     |     |     |   
    -----       -----       -----       -----    

__________________________________________________

- Changes to implement: 
    - Insert secondary 'NavBar' (only displays 'connect to wallet to withdraw, deposit, and see balance')
    - Change colour of current 'NavBar'

*/

import "./WalletFeatures.css"
// import BalanceFunction from "./BalanceFunction";
import DepositFunction from "./DepositFunction";
// import WithdrawFunction from "./WithdrawFunction";

const WalletFeatures = () => {
  return (
    <nav className="WalletFeatures-container">
      <div>
        <DepositFunction />
      </div>
      <div>
        {/* <WithdrawFunction /> */}
      </div>
      {/* <div>
        <BalanceFunction />
      </div> */}
    </nav>
  );
};

export default WalletFeatures;
