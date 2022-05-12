import PropTypes from 'prop-types';
import { useState } from 'react';
import {useStore} from '../../components/stateHooks/store'
import mobileWallet from '../../public/walletconnect.svg';
import metamask from '../../public/MetaMask_Fox.svg';
import trustWallet from '../../public/trust.svg';
import Image from 'next/image';
import { WALLET_WIDTH } from '../../constants.js';
import{appConnector} from "../../scripts/connectors"
import { Icon } from '@iconify/react';

export default function WalletModal({ showModal = false, title = 'Wallet' }) {
  const [showWalletModal, setWalletShowModal] = useState(showModal);    
  const displayModal = useStore((state) => state.setDisplayModalFalse)

  const handleClose = () => {
    setWalletShowModal(false);
    displayModal();
  };

  const connectMetaMaskWallet = () => {
    appConnector.connectWallet();
  }

  const connectMobileWallet = () => {
    appConnector.connectWithWalletConnect();
  }

  return (
    <>
      {showWalletModal ? (
        <>
          <div className="d-flex flex-column">
            <div className="relative w-full my-6 mx-auto max-w-md rounded">
              <div className="p-5 rounded border-0 rounded-lg shadow-lg position-relative bg-white">
                <div className="flex justify-between p-5">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <button className="position-absolute border-0 bg-white text-danger pl-3 pr-3 top-0 end-0 fs-2" onClick={handleClose}>
                  <Icon icon="eva:close-fill" />
                  </button>
                </div>
                <div className="wallet- d-flex flex-column">
                  <button className="d-flex shadow-sm align-items-center bg-white justify-content-around mb-4 border-0 rounded" onClick={connectMobileWallet}>
                    <Image
                      src={mobileWallet}
                      alt="wallet"
                      width={WALLET_WIDTH}
                      height={WALLET_WIDTH}
                      className="align-straight pr-3"
                    />
                    <span className="align-straight">Mobile Wallet</span>
                  </button>
                  <button className="d-flex shadow-sm align-items-center bg-white justify-content-around mb-4 border-0 rounded" onClick={connectMetaMaskWallet}>
                    <Image
                      src={metamask}
                      alt="metamask"
                      width={WALLET_WIDTH}
                      height={WALLET_WIDTH}
                      className="align-straight pr-3"
                    />
                    <span className="align-straight">Metamask</span>
                  </button >
                  {/* <button onClick={connectWallet}>
                    <img
                      src={trustWallet}
                      alt="trust wallet"
                      width={WALLET_WIDTH}
                      height={WALLET_WIDTH}
                      className="align-straight pr-3"
                    />
                    <span className="align-straight"> Trust Wallet</span>
                  </button> */}
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
