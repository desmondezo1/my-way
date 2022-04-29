import PropTypes from 'prop-types';
import { useState } from 'react';
import mobileWallet from '../assets/walletconnect.svg';
import metamask from '../assets/MetaMask_Fox.svg';
import trustWallet from '../assets/trust.svg';
import { WALLET_WIDTH } from '../constants';
import{appConnector} from "../../scripts/connectors"

export default function WalletModal({ showModal = false, title = 'Wallet' }) {
  const [showWalletModal, setWalletShowModal] = useState(showModal);
  const handleClose = () => {
    setWalletShowModal(false);
  };
  return (
    <>
      {showWalletModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-md">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-between p-5">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <button onClick={handleClose}>x</button>
                </div>
                <div className="wallet-options">
                  <button onClick={()=>{appConnector.connectWallet; handleClose}}>
                    <img
                      src={mobileWallet}
                      alt="wallet"
                      width={WALLET_WIDTH}
                      height={WALLET_WIDTH}
                      className="align-straight pr-3"
                    />
                    <span className="align-straight">Mobile Wallet</span>
                  </button>
                  <button onClick={appConnector.connectWallet}>
                    <img
                      src={metamask}
                      alt="metamask"
                      width={WALLET_WIDTH}
                      height={WALLET_WIDTH}
                      className="align-straight pr-3"
                    />
                    <span className="align-straight">Metamask</span>
                  </button >
                  <button onClick={appConnector.connectWallet}>
                    <img
                      src={trustWallet}
                      alt="trust wallet"
                      width={WALLET_WIDTH}
                      height={WALLET_WIDTH}
                      className="align-straight pr-3"
                    />
                    <span className="align-straight"> Trust Wallet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

WalletModal.propTypes = {
  showModal: PropTypes.bool,
  title: PropTypes.string
};
