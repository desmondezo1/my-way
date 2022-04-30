// import React, { useEffect, useState } from "react";
// // import Logo from './components/Logo';
// import { FormikProvider, useFormik } from 'formik';
// import './App.css';
// import arrowRight from './assets/arrow-right.svg';
// import wallet from './assets/wallet.svg';
// import Dropdown from './components/Dropdown';
// import FormTextInput from './components/FormTextInput';
// import { appConnector } from "../scripts/connectors";
// import Logo from './components/Logo';
// import WalletModal from './components/WalletModal';
import MyWayRouter from './routes';
import './App.css';
import './css/form.css';


// const DAI = new ethers.Contract(DAI_ADDRESS, ERC20ABI, provider);
// DAIBalance = await DAI.balanceOf(owner.address);

function App() {
  return <MyWayRouter />;
}

export default App;
