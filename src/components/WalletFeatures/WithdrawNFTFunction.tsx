import { Link, ImmutableXClient, ImmutableMethodResults, ERC721TokenType, ImmutableRollupStatus  } from '@imtbl/imx-sdk';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

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
        <br />
        <h3><strong>NFT Withdrawal Flow:</strong></h3>
        <br />
        <div>
          <h3><strong>Deposit NFT</strong></h3>
          <br/>
          <label>
          <strong>Token ID:</strong>
            <input type="text" value={depositTokenId} onChange={e => setDepositTokenId(e.target.value)} />
          </label>
          <label>
          <strong>Token Address:</strong>
            <input type="text" value={depositTokenAddress} onChange={e => setDepositTokenAddress(e.target.value)} />
          </label>
          <Button style={{ marginRight: '15px' }} variant='info' onClick={depositNFT}>Deposit NFT</Button>
        </div>
        <br/>
        <div>
        <h3><strong>Prepare NFT Withdrawal</strong></h3> 
        <p>(submit to be rolled up and confirmed on chain in next batch):</p>
          <label>
          <strong>Token ID:</strong>
            <input type="text" value={prepareTokenId} onChange={e => setPrepareTokenId(e.target.value)} />
          </label>
          <label>
          <strong>Token Address:</strong>
            <input type="text" value={prepareTokenAddress} onChange={e => setPrepareTokenAddress(e.target.value)} />
          </label>
          <Button style={{ marginRight: '15px' }} variant='info' onClick={prepareWithdrawalNFT}>Prepare NFT Withdrawal</Button>
        </div>
        <br/>
        <div>
        <h3><strong>Complete NFT withdrawal</strong></h3>  
        <p>(withdraws single NFT ready for withdrawal to L1 wallet):</p>
          <label>
          <strong>Token ID:</strong>
            <input type="text" value={completeTokenId} onChange={e => setCompleteTokenId(e.target.value)} />
          </label>
          <label>
          <strong>Token Address:</strong>
            <input type="text" value={completeTokenAddress} onChange={e => setCompleteTokenAddress(e.target.value)} />
          </label>
          <Button style={{ marginRight: '15px' }} variant='info' onClick={completeWithdrawalNFT}>Complete NFT Withdrawa</Button>
        </div>
      </div>
      <br/><br/><br/>
    </div>
  );
}

export default WithdrawNFTFunction;
