import { FormikProvider, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import Dropdown from '../../components/Form/Dropdown';
import WalletModal from '../../components/modals/WalletModal';
import { SendPackageSchema } from '../../schemas/index.js';
import arrowRight from '../../public/arrow-right.svg';
import Image from 'next/image';
import FormTextInput from '../../components/Form/FormTextInput'
import formStyle from '../../styles/form.module.css'
import buttonStyle from '../../styles/button.module.css'
// import statesInNigeria from '../../utils/statesInNigeria.js'
// import './App.css';

// import { appConnector } from "../../scripts/connectors"
// import Logo from '../components/Logo';
// import WalletConnectProvider from '@walletconnect/react-native-dapp';
// import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Home() {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [statesInNigeria, setSatesInNigeria] = useState([]);
  const [walletConnected, setWalletState] = useState(false);
  // const navigate = useNavigate();
  let address;

  // function getWalletAddress(){
  //   address = appConnector.checkForWallet();
  //     if(address){
  //       setCurrentAccount(address);
  //       setWalletState(true);
  //     }
    
  //   }


  useEffect(() => {
    
    fetch('/api/get-states').then(res => res.json()).then(states => {
      // console.log(states); 
      setSatesInNigeria(states);
    })
    // getWalletAddress();
    // console.log({currentAccount});

  }, [])


  const formik = useFormik({
    initialValues: {
      destinationFrom: '',
      destinationTo: '',
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
      let wallet  = await appConnector.checkForWallet()
      if (wallet) {
        // values.wallet = wallet;
         
        // let order = await fetch('http://localhost:4000/create-order',{method:'POST',
        // headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify(values)})
        // .then(response => response.json())
        // .then(data => {
        //   console.log('order created:', data);
        //   if(data){
        //     // navigate("/commuters");
        //   }
        // })


      }else{
        // appConnector.connectWallet();
      }
      setShowWalletModal(true);
    }
  });
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <>
    <div className="send-package__details">
   
      {showWalletModal && <WalletModal showModal title="Connect Wallet" />}
      <FormikProvider value={formik}>
        <form className="form inner-content" onSubmit={handleSubmit}>
          <div className={`${"container"} ${formStyle.dropdown_wrapper}`}>
            <h1 className={formStyle.dropdown_title}>Send packages</h1>
            <div className={`${"container"} ${formStyle.dropdown_select_wrapper}`} id="logistics">
            
              <Dropdown
                items={statesInNigeria}
                ariaLabel="deliver package from"
                firstOption="From"
                getFieldProps={getFieldProps('destinationFrom')}
              />

              <span className={`${"md:inline-block align-middle hidden"} ${formStyle.arrow}`}>
              <Image 
              src={arrowRight} 
              alt="arrow right" 
              />
      
              </span>

              <Dropdown
                items={statesInNigeria}
                ariaLabel="deliver package to"
                firstOption="To"
                getFieldProps={getFieldProps('destinationTo')}
              />
            </div>
          </div>

          <div className={`${"bg-info-light p-8 rounded-md mx-auto"} ${formStyle.fromWrapper}`}>
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
            <div className={formStyle.formInputGroup}>
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
            <div className={formStyle.formInputGroup}>
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
            <h3 className={formStyle.segmentTitle} >Receiver&apos;s</h3>
            <div className={formStyle.formInputGroup}>
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
            <div className={formStyle.formInputGroup}>
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
            <h3 className={formStyle.segmentTitle}>Set your fair price</h3>
            <div className={formStyle.formInputGroup} data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
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
            <button className={`${"mx-auto"} ${buttonStyle.submit}`} type="submit" disabled={isSubmitting}>
              Send Package
            </button>
          </div>
        </form>
      </FormikProvider>
    </div>
  </>
  );
}
