import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyC3fRtF49WmgWoGTmvElvz-PL1JSOFwepU",
    authDomain: "clone-1705f.firebaseapp.com",
    projectId: "clone-1705f",
    storageBucket: "clone-1705f.appspot.com",
    messagingSenderId: "742581351755",
    appId: "1:742581351755:web:5399a583a3c891d764e4ce"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new  firebase.auth.GoogleAuthProvider();

  export {db,auth,provider} ;

  