import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATYL6CWaXj1-vMTUmb4rWS_srBgw0j5Og",
  authDomain: "startup-fund-raising-website.firebaseapp.com",
  projectId: "startup-fund-raising-website",
  databaseURL: "https://startup-fund-raising-website-default-rtdb.firebaseio.com/",
  storageBucket: "startup-fund-raising-website.appspot.com",
  messagingSenderId: "824522581590",
  appId: "1:824522581590:web:5bfe1e57dcec403db17df7",
  measurementId: "G-EPWB2RDX9H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};