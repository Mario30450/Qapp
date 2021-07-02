import * as firebase from "firebase";
import "@firebase/firestore";

const config = {
  apiKey: "AIzaSyCmCvMWa8RmfuuYtL0vxowWAvlxA2BB_LQ",
  authDomain: "chatpp-9aee5.firebaseapp.com",
  projectId: "chatpp-9aee5",
  storageBucket: "chatpp-9aee5.appspot.com",
  messagingSenderId: "941279362295",
  appId: "1:941279362295:web:db8dea2b39cf4a8e77e7f2",
  measurementId: "G-0X41HNVTMX",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore;
