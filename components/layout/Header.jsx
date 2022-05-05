import wallet from '../../public/wallet.svg'
import Logo from '../layout/Logo'
import Image from 'next/image'
import Link from 'next/link'
import buttonStyle from '../../styles/button.module.css'
import header from '../../styles/header.module.css'
export default function Header(){
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

            <button className={buttonStyle.green}>
                <span className={buttonStyle.button_text}>Connect</span>
               
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