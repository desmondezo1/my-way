import React, { useEffect, useState } from "react";
import Logo from './components/Logo';
import { FormikProvider, useFormik } from 'formik';
import './App.css';
import arrowRight from './assets/arrow-right.svg';
import wallet from './assets/wallet.svg';
import Dropdown from './components/Dropdown';
import FormTextInput from './components/FormTextInput';
import { appConnector } from "../scripts/connectors";


// const DAI = new ethers.Contract(DAI_ADDRESS, ERC20ABI, provider);
// DAIBalance = await DAI.balanceOf(owner.address);

const logisticsDestinations = [
  { label: 'Abuja', value: 'abuja' },
  { label: 'Lagos', value: 'lagos' },
  { label: 'Rivers', value: 'rivers' },
  { label: 'Akwa Ibom', value: 'akwa-ibom' }
];

function App() {


  const [currentAccount, setCurrentAccount] = useState("");

  let address;

  function getWalletAddress(){
    address = appConnector.checkForWallet();
      if(address){
        setCurrentAccount(address);
      }
    }

  useEffect(() => {
    
    getWalletAddress();

  }, [])

import Logo from './components/Logo';
import './css/form.css';
import { SendPackageSchema } from './schemas';
import { logisticsDestinations } from './utils/logistics';

function App() {
  const formik = useFormik({
    initialValues: {
      // destinationFrom: '',
      // destinationTo: '',
      senderBusinessName: '',
      senderFirstname: '',
      senderLastname: '',
      senderPhoneNumber: '',
      senderEmail: '',
      receiverPhoneNumber: '',
      receiverEmail: '',
      receiverFirstname: '',
      receiverLastname: '',
      fairPrice: '',
      numberOfItems: 0
    },
    validationSchema: SendPackageSchema,
    onSubmit: async (values) => {
      console.log({ values });
    }
  });
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <div className="App">
      <header>
        <Logo />
        <div className="connect-wallet">
          <p>Deliver a package</p>
          <button onClick={appConnector.connectWallet}>
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
          <FormikProvider value={formik}>
            <form className="form inner-content" onSubmit={handleSubmit}>
              <div id="logistics">
                <Dropdown
                  items={logisticsDestinations}
                  ariaLabel="deliver package from"
                  firstOption="From"
                  getFieldProps={getFieldProps('destinationFrom')}
                />

                <span className="md:inline-block align-middle hidden">
                  <img src={arrowRight} alt="arrow right" />
                </span>

                <Dropdown
                  items={logisticsDestinations}
                  ariaLabel="deliver package to"
                  firstOption="To"
                  getFieldProps={getFieldProps('destinationTo')}
                />
              </div>

              <div className="bg-info-light p-8 rounded-md">
                <div className="form-row">
                  <FormTextInput
                    text="Your Business name"
                    type="text"
                    extraProps={{ placeholder: 'My way services...' }}
                    touched={touched.senderBusinessName}
                    errorMsg={errors.senderBusinessName}
                    getFieldProps={getFieldProps('senderBusinessName')}
                  />
                </div>
                <div className="form-grid">
                  <FormTextInput
                    text="Your first name"
                    extraProps={{ placeholder: 'John' }}
                    touched={touched.senderFirstname}
                    errorMsg={errors.senderFirstname}
                    getFieldProps={getFieldProps('senderFirstname')}
                  />
                  <FormTextInput
                    text="Your last name"
                    extraProps={{ placeholder: 'Doe' }}
                    touched={touched.senderLastname}
                    errorMsg={errors.senderLastname}
                    getFieldProps={getFieldProps('senderLastname')}
                  />
                </div>
                <div className="form-grid">
                  <FormTextInput
                    text="Phone number"
                    extraProps={{ placeholder: '+234xxxxxx' }}
                    touched={touched.senderPhoneNumber}
                    errorMsg={errors.senderPhoneNumber}
                    getFieldProps={getFieldProps('senderPhoneNumber')}
                  />
                  <FormTextInput
                    text="Email"
                    type="email"
                    extraProps={{ placeholder: 'johndoe@dgf.com' }}
                    touched={touched.senderEmail}
                    errorMsg={errors.senderEmail}
                    getFieldProps={getFieldProps('senderEmail')}
                  />
                </div>
                <h3 className="title">Receiver&apos;s</h3>
                <div className="form-grid">
                  <FormTextInput
                    text="Phone number"
                    extraProps={{ placeholder: '+234xxxxxx' }}
                    touched={touched.receiverPhoneNumber}
                    errorMsg={errors.receiverPhoneNumber}
                    getFieldProps={getFieldProps('receiverPhoneNumber')}
                  />
                  <FormTextInput
                    text="Email"
                    type="email"
                    extraProps={{ placeholder: 'johndoe@dgf.com' }}
                    touched={touched.receiverEmail}
                    errorMsg={errors.receiverEmail}
                    getFieldProps={getFieldProps('receiverEmail')}
                  />
                </div>
                <div className="form-grid">
                  <FormTextInput
                    text="First name"
                    extraProps={{ placeholder: 'John' }}
                    touched={touched.receiverFirstname}
                    errorMsg={errors.receiverFirstname}
                    getFieldProps={getFieldProps('receiverFirstname')}
                  />
                  <FormTextInput
                    text="Last name"
                    extraProps={{ placeholder: 'Doe' }}
                    touched={touched.receiverLastname}
                    errorMsg={errors.receiverLastname}
                    getFieldProps={getFieldProps('receiverLastname')}
                  />
                </div>
                <h3 className="title">Set your fair price</h3>
                <div className="form-grid">
                  <FormTextInput
                    text="Price"
                    touched={touched.fairPrice}
                    errorMsg={errors.fairPrice}
                    getFieldProps={getFieldProps('fairPrice')}
                  />
                  <FormTextInput
                    text="Number of items"
                    touched={touched.numberOfItems}
                    errorMsg={errors.numberOfItems}
                    getFieldProps={getFieldProps('numberOfItems')}
                  />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Send Package
                </button>
              </div>
            </form>
          </FormikProvider>
        </div>
      </main>
    </div>
  );
}

export default App;
