import { Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import wallet from '../assets/wallet.svg';

export default function DashboardLayout() {
  return (
    <div className="App">
      <header>
        <Logo />
        <div className="connect-wallet">
          <p>Deliver a package</p>
          <button>
            <span className="pr-3">Connect</span>
            <span>
              <img src={wallet} alt="wallet" width={20} height={20} />
            </span>
          </button>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
    </div>
  );
}
