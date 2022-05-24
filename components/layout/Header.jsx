import wallet from '../../public/wallet.svg'
import Logo from '../layout/Logo'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import buttonStyle from '../../styles/button.module.css'
import header from '../../styles/header.module.css'
import { appConnector } from '../../scripts/connectors' 
import { useStore } from '../../components/stateHooks/store';

export default function Header(){
//  const [showWalletModal, setShowWalletModal] = useState(false);
//  let cWalletState = checkWalletState();
const displayModal = useStore((state) => state.setDisplayModalTrue)
const walletBal = useStore((state) => state.walletBalance)
const walletConnected = useStore((state) => state.walletConnected)



 function checkWalletState(){
    //  setShowWalletModal(true);
    // appUseStore.setModalState(true);
        //  appConnector.connectWithWalletConnect();
 }
let cf = checkWalletState();
    return(
<header>
    <div className={header.container}>
    <Logo />
        <div className={header.link_container}>
            <Link href="/commuter">
                <a>
                    Deliver a package
                </a>
            </Link>

            <button className={buttonStyle.green} onClick={displayModal}>
                {!walletConnected ? (
                    <span className={buttonStyle.button_text}>{JSON.stringify(walletConnected)}{walletBal} Connect</span>
                ) : 
                    ( <span className={buttonStyle.button_text}>{walletBal}</span> )
                }
               
                <span className={buttonStyle.icon} >
                    <Image 
                     src="/wallet.svg"
                     alt="User Wallet"
                     width={20}
                     height={20}
                    
                    />
                </span>
            </button>
        </div>
    </div>
</header>
    )
}