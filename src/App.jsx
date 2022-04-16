import Logo from './components/Logo';
import './App.css';
import Dropdown from './components/Dropdown';
import wallet from './assets/wallet.svg';
import arrowRight from './assets/arrow-right.svg';
import FormTextInput from './components/FormTextInput';

const logisticsDestinations = [
  { label: 'Abuja', value: 'abuja' },
  { label: 'Lagos', value: 'lagos' },
  { label: 'Rivers', value: 'rivers' },
  { label: 'Akwa Ibom', value: 'akwa-ibom' }
];

function App() {
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
        <div className="send-package__details">
          <h2>Send packages</h2>
          <div className="lg:space-x-52 md:space-x-40 space-x-2">
            <Dropdown
              items={logisticsDestinations}
              ariaLabel="deliver package from"
              firstOption="From"
            />

            <span className="md:inline-block align-middle hidden">
              <img src={arrowRight} alt="arrow right" />
            </span>

            <Dropdown
              items={logisticsDestinations}
              ariaLabel="deliver package to"
              firstOption="To"
            />
          </div>

          <form className="form inner-content">
            <FormTextInput
              text="Your Business name"
              type="text"
              extraProps={{ placeholder: 'My way services...' }}
            />

            <div className="form-row">
              <FormTextInput
                text="Your first name"
                extraProps={{ placeholder: 'John' }}
              />
              <FormTextInput
                text="Your last name"
                extraProps={{ placeholder: 'Doe' }}
              />
            </div>
            <div className="form-row">
              <FormTextInput
                text="Phone number"
                extraProps={{ placeholder: '+234xxxxxx' }}
              />
              <FormTextInput
                text="Email"
                type="email"
                extraProps={{ placeholder: 'johndoe@dgf.com' }}
              />
            </div>
            <h3>Receiver&apos;s</h3>
            <div className="form-row">
              <FormTextInput
                text="Phone number"
                extraProps={{ placeholder: '+234xxxxxx' }}
              />
              <FormTextInput
                text="Email"
                type="email"
                extraProps={{ placeholder: 'johndoe@dgf.com' }}
              />
            </div>
            <div className="form-row">
              <FormTextInput
                text="First name"
                extraProps={{ placeholder: 'John' }}
              />
              <FormTextInput
                text="Last name"
                extraProps={{ placeholder: 'Doe' }}
              />
            </div>
            <h3>Set your fair price</h3>
            <div className="form-row">
              <FormTextInput text="Price" />
              <FormTextInput text="How many Items" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
