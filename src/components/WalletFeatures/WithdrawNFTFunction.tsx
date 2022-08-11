import { Link, ImmutableXClient, ImmutableMethodResults, ERC721TokenType, ImmutableRollupStatus  } from '@imtbl/imx-sdk';
import { useEffect, useState } from 'react';

interface WithdrawNFTProps {
  client: ImmutableXClient,
  link: Link,
  wallet: string
}

const WithdrawNFTFunction = ({client, link, wallet}: WithdrawNFTProps) => {
  // withdrawals
  const [preparingWithdrawals, setPreparingWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
  const [readyWithdrawals, setReadyWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
  const [completedWithdrawals, setCompletedWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
  // nft
  const [depositTokenId, setDepositTokenId] = useState('');
  const [depositTokenAddress, setDepositTokenAddress] = useState('');
  const [prepareTokenId, setPrepareTokenId] = useState('');
  const [prepareTokenAddress, setPrepareTokenAddress] = useState('');
  const [completeTokenId, setCompleteTokenId] = useState('');
  const [completeTokenAddress, setCompleteTokenAddress] = useState('');

  useEffect(() => {
    load()
  }, [])

  async function load(): Promise<void> {
    setPreparingWithdrawals(await client.getWithdrawals({
      user: wallet,
      rollup_status: ImmutableRollupStatus.included
    })) // included in batch awaiting confirmation
    setReadyWithdrawals(await client.getWithdrawals({
      user: wallet,
      rollup_status: ImmutableRollupStatus.confirmed,
      withdrawn_to_wallet: false
    })) // confirmed on-chain in a batch and ready to be withdrawn
    setCompletedWithdrawals(await client.getWithdrawals({
      user: wallet,
      withdrawn_to_wallet: true
    })) // confirmed on-chain in a batch and already withdrawn to L1 wallet
  };

  // deposit an NFT
  async function depositNFT() {
    await link.deposit({
      type: ERC721TokenType.ERC721,
      tokenId: depositTokenId,
      tokenAddress: depositTokenAddress
    })
  };

  // prepare an NFT withdrawal
  async function prepareWithdrawalNFT() {
    await link.prepareWithdrawal({
      type: ERC721TokenType.ERC721,
      tokenId: prepareTokenId,
      tokenAddress: prepareTokenAddress
    })
  };

  // complete an NFT withdrawal
  async function completeWithdrawalNFT() {
    await link.completeWithdrawal({
      type: ERC721TokenType.ERC721,
      tokenId: completeTokenId,
      tokenAddress: completeTokenAddress
    })
  };

  return (
    <div>
      <div>
        ERC721:
        <div>
          Deposit NFT:
          <br/>
          <label>
            Token ID:
            <input type="text" value={depositTokenId} onChange={e => setDepositTokenId(e.target.value)} />
          </label>
          <label>
            Token Address:
            <input type="text" value={depositTokenAddress} onChange={e => setDepositTokenAddress(e.target.value)} />
          </label>
          <button onClick={depositNFT}>Deposit NFT</button>
        </div>
        <br/><br/>
        <div>
          Prepare NFT for withdrawal (submit to be rolled up and confirmed on chain in the next batch):
          <br/>
          <label>
            Token ID:
            <input type="text" value={prepareTokenId} onChange={e => setPrepareTokenId(e.target.value)} />
          </label>
          <label>
            Token Address:
            <input type="text" value={prepareTokenAddress} onChange={e => setPrepareTokenAddress(e.target.value)} />
          </label>
          <button onClick={prepareWithdrawalNFT}>Prepare NFT Withdrawal</button>
        </div>
        <br/><br/>
        <div>
          Complete NFT withdrawal (withdraws single NFT that is ready for withdrawal to L1 wallet):
          <br/>
          <label>
            Token ID:
            <input type="text" value={completeTokenId} onChange={e => setCompleteTokenId(e.target.value)} />
          </label>
          <label>
            Token Address:
            <input type="text" value={completeTokenAddress} onChange={e => setCompleteTokenAddress(e.target.value)} />
          </label>
          <button onClick={completeWithdrawalNFT}>Complete NFT Withdrawal</button>
        </div>
      </div>
      <br/><br/><br/>
    </div>
  );
}

export default WithdrawNFTFunction;
