import { useWeb3React } from '@web3-react/core';
import { injected } from '../configs/connectors/injected';

const Home = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };
  const disconnect = () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      {active ? (
        <button onClick={disconnect}>Deactive</button>
      ) : (
        <button onClick={connect}>Connect a wallet</button>
      )}
      {account}
    </div>
  );
};

export default Home;
