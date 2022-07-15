import { useWalletHook } from "./useWallethook"

const Wallet = () => {
  const wallet = useWalletHook();
  const walletAddress = wallet?.walletInfo?.address;

  return (
    <div>
      {walletAddress ? (
        <>
          <span>
            <h3 style={{ marginTop: '20px' }}>
              <strong>Wallet address: </strong>
            </h3>
            <p><strong>{walletAddress}</strong></p>
          </span>
          <div
            style={{
              display: "flex",
            }}
          >
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
        </div>
      )
      }
    </div >
  )
};

export default Wallet;
