import "./WalletFeatures.css"
// import BalanceFunction from "./BalanceFunction";
import DepositFunction from "./DepositFunction";
import WithdrawFunction from "./WithdrawFunction";

const WalletFeatures = () => {
  return (
    <nav className="WalletFeatures-container">
      <div>
        <DepositFunction />
      </div>
      <div>
        <WithdrawFunction />
      </div>
    </nav>
  );
};

export default WalletFeatures;
