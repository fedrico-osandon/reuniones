import firebase from 'firebase'

import 'firebase/firestore'

//  The core Firebase JS SDK is always required and must be listed first
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>

//TODO: Add SDKs for Firebase products that you want to use
     /*https://firebase.google.com/docs/web/setup#available-libraries*/

   //Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_ID
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


  export const getFirestore = () => {
      return firebase.firestore(app)
  }