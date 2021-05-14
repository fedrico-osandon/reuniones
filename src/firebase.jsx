import firebase from 'firebase'

import 'firebase/firestore'

//  The core Firebase JS SDK is always required and must be listed first
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>

//TODO: Add SDKs for Firebase products that you want to use
     /*https://firebase.google.com/docs/web/setup#available-libraries*/

   //Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCGBCtNuTXRbsQpLRYGxZRsvUW_hu6odF4",
    authDomain: "cciadmin-cbdfb.firebaseapp.com",
    databaseURL: "https://cciadmin-cbdfb.firebaseio.com",
    projectId: "cciadmin-cbdfb",
    storageBucket: "cciadmin-cbdfb.appspot.com",
    messagingSenderId: "587876963260",
    appId: "1:587876963260:web:1f02407c052f2216e891b9"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


  export const getFirestore = () => {
      return firebase.firestore(app)
  }