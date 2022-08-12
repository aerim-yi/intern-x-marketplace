import { Link, ImmutableXClient, ImmutableMethodResults, ETHTokenType, ImmutableRollupStatus  } from '@imtbl/imx-sdk';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

interface WithdrawETHProps {
  client: ImmutableXClient,
  link: Link,
  wallet: string
}

const WithdrawETH = ({client, link, wallet}: WithdrawETHProps) => {
  // withdrawals
  const [preparingWithdrawals, setPreparingWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
  const [readyWithdrawals, setReadyWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
  const [completedWithdrawals, setCompletedWithdrawals] = useState<ImmutableMethodResults.ImmutableGetWithdrawalsResult>(Object);
  // eth
  const [prepareAmount, setPrepareAmount] = useState('');

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

  // prepare an eth withdrawal
  async function prepareWithdrawalETH() {
    await link.prepareWithdrawal({
      type: ETHTokenType.ETH,
      amount: prepareAmount,
    })
  };

  // complete an eth withdrawal
  async function completeWithdrawalETH() {
    await link.completeWithdrawal({
      type: ETHTokenType.ETH,
    })
  };

  return (
    <div>
      <div>
        <div>
        <h3><strong>Prepare ETH Withdraw</strong></h3>
          <p>(submit to be rolled up and confirmed on chain in the next batch):</p>
          <label>
          <strong>Amount (ETH)</strong>:
            <input type="text" value={prepareAmount} onChange={e => setPrepareAmount(e.target.value)} />
          </label>
          <Button style={{ marginRight: '15px' }} variant='info' onClick={prepareWithdrawalETH}>Prepare ETH Withdrawal</Button>
        </div>
        <br/>
        <div>
        <h3><strong>Complete ETH withdrawal</strong></h3>
        (withdraws entire eth balance that is ready for withdrawal to L1 wallet):
          <br/><br/>
          <Button style={{ marginRight: '15px' }} variant='info' onClick={completeWithdrawalETH}>Complete ETH Withdrawal</Button>
        </div>
      </div>
    </div>
  );
}

export default WithdrawETH;
