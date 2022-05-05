import * as Yup from 'yup';

export const SendPackageSchema = Yup.object().shape({
  destinationFrom: Yup.string().required(
    'What location are you sending this item from?'
  ),
  destinationTo: Yup.string().required(
    'What location are you sending this item to?'
  ),
  senderBusinessName: Yup.string().required('Sender business name is required'),
  senderFirstname: Yup.string().required('Firstname is required'),
  senderLastname: Yup.string().required('Lastname is required'),
  senderPhoneNumber: Yup.string().required('Phone number is required'),
  senderEmail: Yup.string().required('Email is required'),
  receiverPhoneNumber: Yup.string().required('Phone number is required'),
  receiverEmail: Yup.string().required('Email is required'),
  receiverFirstname: Yup.string().required('Firstname is required'),
  receiverLastname: Yup.string().required('Lastname is required'),
  fairPrice: Yup.string().required('Enter your fair price')
});
