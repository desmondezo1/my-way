import admin from 'firebase-admin';
import serviceAccount from '../../config/my-way-c4beb-firebase-adminsdk-u27xu-90cf3bd81e.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();
